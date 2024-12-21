import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Process - How We Deliver Results',
  description: 'Learn about CCDM Services\' proven 5-step Lean Six Sigma process for delivering exceptional results in financial services optimization.',
  openGraph: {
    title: 'CCDM Services Process - Delivering Exceptional Results',
    description: 'Our proven 5-step Lean Six Sigma process for financial services optimization.',
  }
}

const processSteps = [
  {
    step: 'Define',
    description: 'We begin by clearly defining project objectives, scope, and expected outcomes.',
    details: [
      'Identify key stakeholders and requirements',
      'Establish project scope and boundaries',
      'Set clear, measurable objectives',
      'Define success criteria'
    ]
  },
  {
    step: 'Measure',
    description: 'Gather and analyze data to establish baseline performance metrics.',
    details: [
      'Collect relevant data points',
      'Analyze spend patterns',
      'Review current workflows',
      'Establish baseline metrics'
    ]
  },
  {
    step: 'Analyze',
    description: 'Identify root causes of inefficiencies and opportunities for improvement.',
    details: [
      'Perform root cause analysis',
      'Identify inefficiencies',
      'Evaluate improvement opportunities',
      'Prioritize solutions'
    ]
  },
  {
    step: 'Improve',
    description: 'Implement solutions and optimize processes for better performance.',
    details: [
      'Develop improvement strategies',
      'Implement solutions',
      'Renegotiate contracts',
      'Optimize workflows'
    ]
  },
  {
    step: 'Control',
    description: 'Monitor results and maintain improvements through ongoing optimization.',
    details: [
      'Monitor KPIs',
      'Document procedures',
      'Train team members',
      'Ensure sustainable results'
    ]
  }
]

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            How We Deliver Results
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our proven 5-step Lean Six Sigma process ensures consistent, measurable outcomes for your business.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 h-full w-0.5 bg-blue-200" />
                )}
                <div className="relative flex items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-white text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold mb-4">{step.step}</h2>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-4">Key Activities:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            {detail}
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Decisions',
                description: 'Every improvement is backed by thorough analysis and measurable data.'
              },
              {
                title: 'Sustainable Results',
                description: 'Our process ensures long-term success through proper controls and documentation.'
              },
              {
                title: 'Continuous Improvement',
                description: 'Regular monitoring and optimization keep your business performing at its best.'
              }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Measuring Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '30%', label: 'Average Cost Reduction' },
              { metric: '45%', label: 'Efficiency Improvement' },
              { metric: '99.9%', label: 'Process Accuracy' },
              { metric: '90%', label: 'Projects On-Time' }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">{item.metric}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8">Let's apply our proven process to optimize your operations.</p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact">Request a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
