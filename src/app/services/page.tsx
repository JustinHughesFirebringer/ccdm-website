import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - Comprehensive Solutions for Financial Growth',
  description: 'Explore CCDM Services\' comprehensive solutions including Management Consulting, FinTech Services, Debt Management, and BPO Solutions.',
  openGraph: {
    title: 'CCDM Services - Comprehensive Financial Solutions',
    description: 'Expert Management Consulting, FinTech Services, Debt Management, and BPO Solutions for your business.',
  }
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Management Consulting',
      description: 'Strategic guidance and operational excellence through proven methodologies.',
      features: [
        'Process Optimization (Lean Six Sigma)',
        'Strategy and Change Management',
        'Operational Scalability',
        'Performance Metrics & KPIs'
      ]
    },
    {
      title: 'FinTech Services',
      description: 'Cutting-edge technology solutions for modern financial operations.',
      features: [
        'Digital Transformation Advisory',
        'Data Analytics and Automation',
        'Risk and Compliance Solutions',
        'Technology Implementation'
      ]
    },
    {
      title: 'Debt Management',
      description: 'Comprehensive solutions for optimal debt and cost management.',
      features: [
        'Vendor Audits',
        'Contract Negotiations',
        'Spend Analysis',
        'Refund Recovery Services'
      ]
    },
    {
      title: 'BPO Solutions',
      description: 'Efficient back-office operations and process management.',
      features: [
        'Loan Processing and Servicing',
        'Compliance Management',
        'Risk Assessment',
        'Back-Office Optimization'
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            Comprehensive Solutions for Financial Growth
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert services designed to optimize your operations and drive sustainable growth.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact">Discuss Your Needs</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Define', desc: 'Establish objectives and scope' },
              { step: '2', title: 'Measure', desc: 'Analyze current state and data' },
              { step: '3', title: 'Analyze', desc: 'Identify opportunities' },
              { step: '4', title: 'Improve', desc: 'Implement solutions' },
              { step: '5', title: 'Control', desc: 'Monitor and maintain results' }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Working With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cost Efficiency',
                description: 'Optimize spending and improve bottom-line results through our proven methodologies.'
              },
              {
                title: 'Operational Excellence',
                description: 'Streamline processes and enhance productivity with best-in-class solutions.'
              },
              {
                title: 'Sustainable Growth',
                description: 'Build a foundation for long-term success with scalable strategies and solutions.'
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

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our services can help you achieve your goals.</p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
