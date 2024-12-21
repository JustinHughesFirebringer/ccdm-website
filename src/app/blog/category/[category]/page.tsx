import { notFound } from 'next/navigation'
import { blogPosts, blogCategories } from '@/lib/blog'
import { format } from 'date-fns'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { Metadata } from 'next'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  // Convert URL-friendly format back to original category name
  const decodedCategory = decodeURIComponent(params.category).replace(/-/g, ' & ')
  
  // Find the actual category with correct casing
  const actualCategory = blogCategories.find(
    cat => cat.toLowerCase() === decodedCategory.toLowerCase()
  )

  if (!actualCategory) {
    return {
      title: 'Category Not Found',
      description: 'The requested blog category could not be found.'
    }
  }

  return {
    title: `${actualCategory} | CCDM Services Blog`,
    description: `Read our latest insights about ${actualCategory.toLowerCase()}`,
  }
}

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.toLowerCase().replace(/ & /g, '-'),
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Convert URL-friendly format back to original category name
  const decodedCategory = decodeURIComponent(params.category).replace(/-/g, ' & ')
  
  // Find the actual category with correct casing
  const actualCategory = blogCategories.find(
    cat => cat.toLowerCase() === decodedCategory.toLowerCase()
  )

  if (!actualCategory) {
    notFound()
  }

  const categoryPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === actualCategory.toLowerCase()
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{actualCategory}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <time dateTime={post.date} className="text-sm text-gray-500">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <h2 className="text-xl font-bold mb-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-medium">{post.author[0]}</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">{post.readTime} min read</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
