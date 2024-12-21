import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="section pt-16">
        <div className="container">
          <div className="space-y-6">
            <h1 className="gradient-text">
              About CCDM Services
            </h1>
            <p className="text-lg text-muted-foreground">
              CCDM Services is a leading management consulting firm specializing in cost optimization 
              and digital transformation. Our unique pay-for-performance model ensures that our success 
              is directly tied to the value we deliver to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Pay for Performance Model */}
      <section className="section bg-gray-50/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Pay-for-Performance Model</h2>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 space-y-6">
              <p className="text-lg">
                At CCDM Services, we believe in aligning our success with yours. Our innovative 
                pay-for-performance model means:
              </p>
              <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li>You only pay when we deliver measurable results</li>
                <li>Our fees are directly tied to the cost savings we generate</li>
                <li>Zero upfront costs - we invest in your success</li>
                <li>Guaranteed ROI on every engagement</li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="btn btn-primary">Discuss Your Project</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link href={`/services#${service.id}`}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-gray-50/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="h-16 w-16 mx-auto mb-6 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white flex items-center justify-center">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    id: "cost-optimization",
    title: "Cost Optimization",
    description: "Strategic cost reduction and optimization solutions that improve your bottom line while maintaining operational excellence."
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "End-to-end digital transformation services that modernize your operations and drive efficiency through technology."
  },
  {
    id: "process-improvement",
    title: "Process Improvement",
    description: "Lean Six Sigma methodologies to streamline operations, reduce waste, and enhance productivity."
  }
];

const industries = [
  {
    name: "Manufacturing",
    description: "Optimizing production costs and implementing smart factory solutions",
    icon: "🏭"
  },
  {
    name: "Healthcare",
    description: "Improving operational efficiency while maintaining quality of care",
    icon: "🏥"
  },
  {
    name: "Financial Services",
    description: "Modernizing operations and reducing costs in banking and insurance",
    icon: "🏦"
  },
  {
    name: "Technology",
    description: "Scaling operations efficiently in fast-growing tech companies",
    icon: "💻"
  }
];
