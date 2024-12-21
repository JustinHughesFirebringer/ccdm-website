import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies - Proven Results Across Financial Services',
  description: 'Explore real-world examples of how CCDM Services has helped financial institutions optimize costs, improve efficiency, and drive growth.',
  openGraph: {
    title: 'CCDM Services Case Studies - Proven Financial Results',
    description: 'Real success stories of cost optimization and efficiency improvements in financial services.',
  }
}

const caseStudies = [
  {
    title: 'Regional Bank Operational Efficiency',
    industry: 'Banking',
    challenge: 'A regional bank struggled with operational inefficiencies, leading to extended processing times and customer dissatisfaction.',
    solution: 'Implemented Lean Six Sigma methodologies and process automation to streamline operations.',
    results: [
      'Improved operational efficiency by 30%',
      'Reduced processing time by 45%',
      'Increased customer satisfaction scores by 25%',
      'Annual cost savings of $800,000'
    ]
  },
  {
    title: 'Loan Servicer Cost Optimization',
    industry: 'Loan Servicing',
    challenge: 'Major loan servicer faced rising operational costs and inefficient vendor management processes.',
    solution: 'Conducted comprehensive vendor audit and implemented new management system.',
    results: [
      'Annual savings of $1.2M through vendor optimization',
      'Reduced vendor onboarding time by 60%',
      'Improved vendor compliance rates to 99%',
      'Streamlined procurement process'
    ]
  },
  {
    title: 'Mortgage Lender Digital Transformation',
    industry: 'Mortgage Lending',
    challenge: 'Mortgage lender needed to modernize operations and reduce time-to-close metrics.',
    solution: 'Implemented digital transformation strategy and automated key processes.',
    results: [
      'Reduced time-to-close by 25%',
      'Increased processing capacity by 40%',
      'Improved accuracy rates to 99.9%',
      'Enhanced customer experience scores'
    ]
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Proven Results Across Financial Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore how we've helped leading financial institutions optimize their operations and drive growth.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">{study.title}</h2>
                    <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '$50M+', label: 'Client Savings' },
              { stat: '30%', label: 'Average Efficiency Gain' },
              { stat: '99.9%', label: 'Accuracy Rate' },
              { stat: '40+', label: 'Successful Projects' }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8">Let's discuss how we can help optimize your operations and drive growth.</p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
