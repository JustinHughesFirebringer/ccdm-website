const { blogGenerator } = require('./blog-generator/blog-generator');
const path = require('path');
const { fileURLToPath } = require('url');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateDailyBlogs() {
  try {
    const projectRoot = path.resolve(__dirname, '..');
    await blogGenerator.updateBlogPosts(projectRoot);
    console.log('Successfully generated and updated blog posts');
  } catch (error) {
    console.error('Error generating blog posts:', error);
    process.exit(1);
  }
}

generateDailyBlogs();
