import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog'
import { format } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | CCDM Services Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags
    }
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime} min read</span>
          </div>
          <span>•</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        {post.content
          .replace(/\\n/g, '\n') // Replace escaped newlines with actual newlines
          .split('\n\n')
          .map((paragraph, index) => (
            <p key={index}>
              {paragraph.split('\n').map((line, lineIndex) => (
                <>
                  {lineIndex > 0 && <br />}
                  {line}
                </>
              ))}
            </p>
          ))}
      </div>
    </article>
  )
}
