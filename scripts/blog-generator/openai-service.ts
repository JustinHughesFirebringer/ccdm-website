const OpenAI = require('openai');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

class OpenAIService {
  private openai: any;
  private assistantId: string;
  private maxRetries = 3;
  private retryDelay = 1000; // 1 second

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    this.assistantId = process.env.OPENAI_ASSISTANT_ID || 'asst_XWVTvBxKH8ATFHgKwwQhtHYV';

    if (!apiKey) {
      throw new Error('OpenAI API key not found in environment variables');
    }

    this.openai = new OpenAI({
      apiKey: apiKey
    });
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async waitForRun(threadId: string, runId: string): Promise<void> {
    let attempts = 0;
    const maxAttempts = 30; // Maximum 30 attempts (30 seconds)

    while (attempts < maxAttempts) {
      const runStatus = await this.openai.beta.threads.runs.retrieve(threadId, runId);
      
      switch (runStatus.status) {
        case 'completed':
          return;
        case 'failed':
          throw new Error(`Assistant run failed: ${runStatus.last_error?.message || 'Unknown error'}`);
        case 'expired':
          throw new Error('Assistant run expired');
        case 'cancelled':
          throw new Error('Assistant run was cancelled');
        default:
          await this.sleep(1000);
          attempts++;
      }
    }

    throw new Error('Timeout waiting for assistant response');
  }

  async generateBlogContent(prompt: string): Promise<string> {
    let thread;
    let attempts = 0;

    while (attempts < this.maxRetries) {
      try {
        // Create a thread
        thread = await this.openai.beta.threads.create();

        // Add message to thread
        await this.openai.beta.threads.messages.create(thread.id, {
          role: "user",
          content: prompt
        });

        // Run the assistant
        const run = await this.openai.beta.threads.runs.create(thread.id, {
          assistant_id: this.assistantId
        });

        // Wait for completion
        await this.waitForRun(thread.id, run.id);

        // Get messages
        const messages = await this.openai.beta.threads.messages.list(thread.id);
        const assistantMessage = messages.data.find(msg => msg.role === 'assistant');

        if (!assistantMessage?.content[0]) {
          throw new Error('No response from assistant');
        }

        const content = assistantMessage.content[0].text.value;

        // Clean up
        if (thread) {
          await this.openai.beta.threads.del(thread.id).catch(error => {
            console.warn('Failed to delete thread:', error);
          });
        }

        return content;

      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed:, error`);

        if (thread) {
          await this.openai.beta.threads.del(thread.id).catch(cleanupError => {
            console.warn('Failed to delete thread during error cleanup:', cleanupError);
          });
        }

        if (attempts === this.maxRetries) {
          throw new Error(`Failed to generate blog content after ${this.maxRetries} attempts: ${error.message}`);
        }

        await this.sleep(this.retryDelay * attempts);
      }
    }

    throw new Error('Failed to generate blog content');
  }

  generateBlogPrompt(keyword: string, category: string): string {
    return `Write a professional blog post about "${keyword}" for the category "${category}". 

Follow these guidelines:
1. Write in a clear, professional, yet conversational tone
2. Include specific examples and data points
3. Focus on practical, actionable advice
4. Avoid clichés and buzzwords
5. Use a structure with clear sections and subheadings
6. Include real-world examples and case studies when relevant
7. Keep the content between 800-1200 words
8. Focus on providing genuine value rather than marketing speak

The blog should be SEO-optimized but natural-sounding, targeting businesses interested in cost reduction and operational efficiency.

Do not use phrases like "Master," "Navigate," "Imagine," "Unleash the power," "Fast-Paced," "Take it to the next level," "Transform," "Maximize," "Optimize," "Streamline," "Boost," "Cutting-edge," "Game-changer," "Best-in-class," "Think outside the box," "Thought leader," or similar clichés.

Use the following sections:
1. Introduction (with a real problem statement)
2. Main points (with specific examples)
3. Case study or real-world example
4. Practical steps or recommendations
5. Conclusion with clear takeaways

Remember to maintain a professional tone while being engaging and informative.`;
  }
}

const openAIService = new OpenAIService();
module.exports = { openAIService };
