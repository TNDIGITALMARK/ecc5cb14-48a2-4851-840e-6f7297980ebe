import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { ArrowRight, Sparkles, TrendingUp, Award, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Premium Brand Showcase Services
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            Transform Your Brand
            <br />
            Into a{' '}
            <span className="text-primary relative">
              Visual Story
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Professional social media marketing and website showcases that elevate emerging
            brands. From concept to viral sensation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-105"
            >
              Submit Your Brand
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-all"
            >
              View Our Work
            </Link>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">340%</div>
              <div className="text-sm text-muted-foreground">Avg. Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">2.4M+</div>
              <div className="text-sm text-muted-foreground">Total Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Brands Showcased</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Why Brands Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional showcase services that drive real results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Growth Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every showcase is designed to maximize engagement and drive measurable growth for
                your brand.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional photography, compelling storytelling, and sophisticated design that
                elevates your brand.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Dedicated Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track your project status in real-time and communicate directly with our creative
                team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-primary rounded-2xl p-12 shadow-2xl">
          <h2 className="text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join 150+ brands that transformed their visibility with our showcase services.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-xl hover:scale-105"
          >
            Start Your Showcase
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="mb-2 font-heading text-lg text-foreground">Michelle Louis Brand Showcase</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Michelle Louis. Premium social media marketing services.
          </p>
        </div>
      </footer>
    </div>
  );
}
