const { keywordCategories, KeywordCategory } = require('./keywords');
import * as contentTemplates from './content-templates';
import * as fs from 'fs';
import * as path from 'path';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: string;
  readTime: number;
  tags: string[];
}

class BlogGenerator {
  private keywordIndex: Map<string, number> = new Map();
  private readTimeIndex: number = 0;
  private readTimes: number[] = [1, 3, 5];
  private currentId: number = 0;
  private authors: string[] = [
    'Sarah Johnson',
    'John Smith',
    'Michael Chen',
    'Emily Rodriguez',
    'David Kim',
    'Lisa Thompson',
    'Alex Morgan',
    'Ryan Peters'
  ];
  private industries: string[] = [
    'financial services',
    'healthcare',
    'manufacturing',
    'retail',
    'technology',
    'insurance',
    'banking',
    'consulting'
  ];

  constructor() {
    keywordCategories.forEach(cat => {
      this.keywordIndex.set(cat.category, 0);
    });
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  private getNextKeyword(category: string): string {
    const categoryData = keywordCategories.find(cat => cat.category === category);
    if (!categoryData) throw new Error(`Category not found: ${category}`);

    const currentIndex = this.keywordIndex.get(category) || 0;
    const keyword = categoryData.keywords[currentIndex];
    
    this.keywordIndex.set(category, (currentIndex + 1) % categoryData.keywords.length);
    return keyword;
  }

  private getNextReadTime(): number {
    const readTime = this.readTimes[this.readTimeIndex];
    this.readTimeIndex = (this.readTimeIndex + 1) % this.readTimes.length;
    return readTime;
  }

  private getTemplate(category: string): contentTemplates.ContentTemplate {
    const template = contentTemplates.contentTemplates.find(t => t.category === category);
    if (!template) throw new Error(`Template not found for category: ${category}`);
    return template;
  }

  private getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private generateContent(category: string, keyword: string, readTime: number = 1): string {
    const template = this.getTemplate(category);
    const industry = this.getRandomElement(this.industries);
    
    // Base content components
    const basePainPoint = `their ${keyword.toLowerCase()} costs were increasing by 25% year over year`;
    const baseCommonProblem = `many organizations struggle to effectively manage and optimize their ${keyword.toLowerCase()}`;
    const baseKeyPoints = [
      "- Analysis of current state and identification of improvement opportunities",
      "- Implementation of proven methodologies and best practices",
      "- Measurement and tracking of key performance indicators",
      "- Continuous improvement and optimization processes"
    ];
    
    const baseSpecificAction = `implementing structured ${keyword.toLowerCase()} processes`;
    const baseSpecificResult = "a 32% reduction in operational costs";
    const baseKeyResult = `organizations implementing structured ${keyword.toLowerCase()} processes see an average 30% improvement in efficiency`;
    const basePracticalImplication = "significant cost savings and improved operational efficiency are achievable through structured implementation";

    // Scale content based on read time
    const repeatFactor = readTime;
    const keyPoints = Array(repeatFactor).fill(baseKeyPoints).flat().join("\\n");
    
    let content = `In the competitive landscape of ${industry}, ${baseCommonProblem}. `;
    content += `One of our clients faced a significant challenge where ${basePainPoint}. `;
    
    // Add detailed sections based on read time
    for (let i = 0; i < repeatFactor; i++) {
      content += `\\n\\nKey Considerations for Phase ${i + 1}:\\n${keyPoints}`;
      content += `\\n\\nIn phase ${i + 1}, by ${baseSpecificAction}, the client achieved ${baseSpecificResult}. `;
      content += `Research shows that ${baseKeyResult}. `;
      
      if (i < repeatFactor - 1) {
        content += `\\n\\nMoving forward to the next phase, ${basePracticalImplication}. `;
      }
    }
    
    // Add conclusion
    content += `\\n\\nConclusion:\\nThrough this multi-phase approach, ${basePracticalImplication}. `;
    content += `Organizations that invest in ${keyword.toLowerCase()} optimization can expect similar results when following these structured methodologies.`;
    
    return content;
  }

  private estimateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }

  private generateUniqueId(): string {
    this.currentId += 1;
    return `${Date.now()}-${this.currentId}`;
  }

  generateBlogPost(category: string): BlogPost {
    const keyword = this.getNextKeyword(category);
    const readTime = this.getNextReadTime();
    const content = this.generateContent(category, keyword, readTime);
    const date = new Date().toISOString().split('T')[0];
    
    return {
      id: this.generateUniqueId(),
      title: keyword,
      slug: this.generateSlug(keyword),
      description: `Learn practical strategies and proven methods for ${keyword.toLowerCase()} in your organization.`,
      date,
      author: this.getRandomElement(this.authors),
      category,
      content,
      readTime,
      tags: keyword.toLowerCase().split(' ').filter(tag => tag.length > 3)
    };
  }

  generateDailyBlogPosts(): BlogPost[] {
    return keywordCategories.map(category => 
      this.generateBlogPost(category.category)
    );
  }

  async updateBlogPosts(outputPath: string): Promise<void> {
    try {
      const newPosts = this.generateDailyBlogPosts();
      
      // Read existing blog posts
      const blogFilePath = path.join(outputPath, 'src/lib/blog.ts');
      let existingContent = await fs.promises.readFile(blogFilePath, 'utf8');
      
      // Extract existing blog posts array content
      const blogPostsMatch = existingContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
      if (!blogPostsMatch) throw new Error('Could not find blogPosts array in file');
      
      // Extract individual blog post objects
      const existingBlogPosts: BlogPost[] = [];
      const blogPostRegex = /\{[\s\S]*?id:\s*['"]([^'"]*)['"]/g;
      let match;
      let existingIds = new Set<string>();
      
      while ((match = blogPostRegex.exec(blogPostsMatch[1])) !== null) {
        const id = match[1];
        if (!existingIds.has(id)) {
          existingIds.add(id);
          const postStr = match[0].replace(/\{[\s\S]*?id:\s*['"][^'"]*['"]/, '{');
          try {
            const post: BlogPost = {
              id,
              title: this.extractValue(postStr, 'title'),
              slug: this.extractValue(postStr, 'slug'),
              description: this.extractValue(postStr, 'description'),
              date: this.extractValue(postStr, 'date'),
              author: this.extractValue(postStr, 'author'),
              category: this.extractValue(postStr, 'category'),
              content: 'Full blog post content here...',
              readTime: parseInt(this.extractValue(postStr, 'readTime')) || 5,
              tags: this.extractArray(postStr, 'tags')
            };
            existingBlogPosts.push(post);
          } catch (err) {
            console.warn(`Skipping post with ID ${id} due to parsing error:`, err);
          }
        }
      }
      
      // Add new posts to the beginning of the array
      const updatedBlogPosts = [...newPosts, ...existingBlogPosts];
      
      // Keep only the latest 50 posts
      const latestPosts = updatedBlogPosts.slice(0, 50);
      
      // Update the file
      const updatedContent = existingContent.replace(
        /export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/,
        `export const blogPosts: BlogPost[] = ${JSON.stringify(latestPosts, null, 2)};`
      );
      
      await fs.promises.writeFile(blogFilePath, updatedContent, 'utf8');
      console.log('Successfully updated blog posts');
    } catch (error) {
      console.error('Error updating blog posts:', error);
      throw error;
    }
  }

  private extractValue(str: string, key: string): string {
    const regex = new RegExp(`${key}:\\s*['"]([^'"]*)['"](,|\\s|})`, 'i');
    const match = str.match(regex);
    return match ? match[1] : '';
  }

  private extractArray(str: string, key: string): string[] {
    const regex = new RegExp(`${key}:\\s*\\[([^\\]]*)]`, 'i');
    const match = str.match(regex);
    if (!match) return [];
    return match[1]
      .split(',')
      .map(s => s.trim())
      .filter(s => s)
      .map(s => s.replace(/['"]/g, ''));
  }
}

const blogGenerator = new BlogGenerator();

module.exports = { blogGenerator };
