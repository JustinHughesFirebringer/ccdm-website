import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Testimonials - Trusted by Industry Leaders',
  description: 'Read what our clients say about CCDM Services\' impact on their business through our management consulting, FinTech, and Lean Six Sigma solutions.',
  openGraph: {
    title: 'CCDM Services Client Testimonials - Industry Leaders Trust Us',
    description: 'Discover how CCDM Services has transformed businesses through expert consulting and FinTech solutions.',
  }
}

const testimonials = [
  {
    quote: "CCDM Services helped us uncover savings we didn't know existed. Their thorough approach to vendor management and cost optimization has transformed our operations.",
    author: "Sarah Johnson",
    title: "CFO",
    company: "Regional Banking Group",
    impact: "Achieved 30% cost reduction in vendor services"
  },
  {
    quote: "Their Six Sigma expertise transformed our operations completely. We've seen remarkable improvements in efficiency and customer satisfaction.",
    author: "Michael Chen",
    title: "COO",
    company: "National Mortgage Services",
    impact: "Reduced processing time by 45%"
  },
  {
    quote: "We've never seen such actionable insights from a consulting firm before. CCDM's data-driven approach made all the difference.",
    author: "David Martinez",
    title: "VP of Operations",
    company: "Financial Technology Solutions",
    impact: "Improved operational efficiency by 40%"
  },
  {
    quote: "The team's expertise in both financial services and technology implementation is unmatched. They delivered exactly what we needed.",
    author: "Emily Thompson",
    title: "Director of Technology",
    company: "Credit Union Services",
    impact: "Successfully implemented digital transformation"
  }
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Trusted by Industry Leaders
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how we've helped organizations achieve exceptional results through our expertise and dedication.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl font-bold">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700 font-medium">
                    Impact: {testimonial.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Clients Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '95%', label: 'Client Satisfaction' },
              { stat: '100+', label: 'Projects Completed' },
              { stat: '30+', label: 'Years Experience' },
              { stat: '40+', label: 'Industry Leaders Served' }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Organizations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Replace with actual client logos */}
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Success Stories</h2>
          <p className="text-xl mb-8">Let's discuss how we can help your organization achieve similar results.</p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
