import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'CCDM Services Blog - Expert Insights on Cost Reduction & Business Optimization',
  description: 'Discover expert insights on spend management, offshore outsourcing, Lean Six Sigma, and FinTech solutions for business optimization and cost reduction.',
  openGraph: {
    title: 'CCDM Services Blog - Cost Reduction & Business Optimization Insights',
    description: 'Expert insights on spend management, outsourcing, Lean Six Sigma, and FinTech solutions.',
  }
}

const blogPosts = [
  {
    id: '1',
    title: 'Maximizing ROI Through Strategic Cost Reduction',
    excerpt: 'Learn how modern businesses are leveraging data-driven insights to optimize spending and improve bottom-line performance.',
    date: '2023-12-20',
    category: 'Cost Reduction',
    slug: 'maximizing-roi-strategic-cost-reduction',
    featuredImage: {
      node: {
        sourceUrl: '/images/growthinferno-demo.jpg'
      }
    },
    categories: {
      nodes: [
        {
          name: 'Cost Reduction',
          slug: 'cost-reduction'
        }
      ]
    }
  },
  {
    id: '2',
    title: 'The Future of Process Optimization',
    excerpt: 'Discover how Lean Six Sigma principles are evolving with modern technology to create more efficient operations.',
    date: '2023-12-15',
    category: 'Lean Six Sigma',
    slug: 'future-process-optimization',
    featuredImage: {
      node: {
        sourceUrl: '/images/growthinferno-demo.jpg'
      }
    },
    categories: {
      nodes: [
        {
          name: 'Lean Six Sigma',
          slug: 'lean-six-sigma'
        }
      ]
    }
  },
  {
    id: '3',
    title: 'Digital Transformation in Financial Services',
    excerpt: 'How FinTech solutions are revolutionizing traditional financial operations and improving efficiency.',
    date: '2023-12-10',
    category: 'FinTech',
    slug: 'digital-transformation-financial-services',
    featuredImage: {
      node: {
        sourceUrl: '/images/growthinferno-demo.jpg'
      }
    },
    categories: {
      nodes: [
        {
          name: 'FinTech',
          slug: 'fintech'
        }
      ]
    }
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Expert Insights for Business Optimization
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover strategies for cost reduction, process optimization, and business transformation
            from industry experts.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {post.featuredImage?.node?.sourceUrl && (
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.categories?.nodes?.length > 0 && (
                    <div className="mb-4">
                      <Link
                        href={`/blog/category/${post.categories.nodes[0].slug}`}
                        className="text-brand-primary font-semibold text-sm"
                      >
                        {post.categories.nodes[0].name}
                      </Link>
                    </div>
                  )}
                  <h2 className="text-xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </div>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                    <Link href={`/blog/${post.slug}`} className="btn btn-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl text-white p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-lg mb-8">
                Subscribe to our newsletter for the latest insights on cost reduction,
                process optimization, and business transformation.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-gray-900 min-w-[300px]"
                />
                <Button className="bg-white text-brand-primary hover:bg-gray-100">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
