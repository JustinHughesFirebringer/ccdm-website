import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getPageContent } from "@/lib/content";

export default async function Home() {
  const content = await getPageContent('home');

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="section pt-32 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="gradient-text">
                {content.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn btn-primary">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="animate-float">
                <div className="relative aspect-square max-w-md mx-auto p-8 rounded-lg bg-gradient-to-r from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-lg blur-xl"></div>
                  <div className="relative h-full w-full flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="CCDM Logo"
                      width={300}
                      height={300}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-description">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
