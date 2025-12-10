import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  Camera,
  Palette,
  Megaphone,
  CheckCircle2,
  Star,
  Quote,
  MessageSquare,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-background.png"
            alt="Premium marketing background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-xl hover:scale-105"
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

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Comprehensive Showcase Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From professional photography to strategic social media campaigns, we provide
              everything your brand needs to stand out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                Professional Photography
              </h3>
              <p className="text-sm text-muted-foreground">
                High-quality product and lifestyle photography that captures your brand's essence
                and appeals to your target audience.
              </p>
            </div>

            <div className="group bg-card p-6 rounded-xl border-2 border-border hover:border-accent transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Brand Design</h3>
              <p className="text-sm text-muted-foreground">
                Cohesive visual identity and design elements that make your brand instantly
                recognizable across all platforms.
              </p>
            </div>

            <div className="group bg-card p-6 rounded-xl border-2 border-border hover:border-success transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <Megaphone className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                Social Media Marketing
              </h3>
              <p className="text-sm text-muted-foreground">
                Strategic content creation and campaign management designed to grow your audience
                and drive engagement.
              </p>
            </div>

            <div className="group bg-card p-6 rounded-xl border-2 border-border hover:border-primary transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Brand Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven positioning and messaging that resonates with your ideal customers and
                sets you apart.
              </p>
            </div>

            <div className="group bg-card p-6 rounded-xl border-2 border-border hover:border-accent transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Content Creation</h3>
              <p className="text-sm text-muted-foreground">
                Compelling copy, captions, and storytelling that connects with your audience and
                drives action.
              </p>
            </div>

            <div className="group bg-card p-6 rounded-xl border-2 border-border hover:border-success transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Analytics & Reporting</h3>
              <p className="text-sm text-muted-foreground">
                Detailed performance tracking and insights to measure success and optimize your
                showcase strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined workflow designed to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white font-heading font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">Discovery Call</h3>
                <p className="text-sm text-muted-foreground">
                  We learn about your brand, goals, and target audience to create a tailored
                  strategy.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 text-accent-foreground font-heading font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">Creative Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Our team develops a comprehensive showcase plan with mood boards and content
                  strategy.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10"></div>
            </div>

            <div className="relative">
              <div className="bg-card p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4 text-success-foreground font-heading font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">Production</h3>
                <p className="text-sm text-muted-foreground">
                  Professional photography, design, and content creation bring your brand to life.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10"></div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-white font-heading font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Launch & Grow</h3>
              <p className="text-sm text-muted-foreground">
                We publish your showcase and monitor performance to maximize reach and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real brands we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-md relative">
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Michelle transformed our brand's online presence. Our engagement increased by 400%
                in just 3 months, and we've seen a significant boost in sales."
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonials/client-1.png"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-muted-foreground">Founder, Bloom Beauty</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md relative">
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The professionalism and attention to detail is unmatched. Our brand now has a
                cohesive identity that resonates with our target market."
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-accent/10">
                  <div className="w-full h-full flex items-center justify-center font-heading font-bold text-accent-foreground">
                    MC
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Marcus Chen</div>
                  <div className="text-sm text-muted-foreground">CEO, Urban Threads</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-md relative">
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Working with Michelle was a game-changer. The showcase brought our story to life
                and attracted exactly the customers we wanted to reach."
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonials/client-3.png"
                    alt="Emma Patel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">Emma Patel</div>
                  <div className="text-sm text-muted-foreground">Owner, Artisan Coffee Co.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Recent Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              A glimpse of the brands we've helped elevate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/showcase/beauty-showcase.png"
                  alt="Radiance Skincare Showcase"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Beauty
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-xs font-semibold rounded-full">
                    E-commerce
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Radiance Skincare</h3>
                <p className="text-muted-foreground mb-4">
                  Transformed a local skincare brand into a social media sensation with over 50K
                  new followers in 2 months.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-success">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">+320% engagement</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">50K followers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/showcase/fashion-showcase.png"
                  alt="Modern Minimalist Fashion Showcase"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-xs font-semibold rounded-full">
                    Fashion
                  </span>
                  <span className="px-3 py-1 bg-success/10 text-success-foreground text-xs font-semibold rounded-full">
                    Retail
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Modern Minimalist</h3>
                <p className="text-muted-foreground mb-4">
                  Elevated a boutique fashion brand with premium photography and strategic content
                  that drove 5x revenue growth.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-success">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">+500% revenue</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <BarChart3 className="w-4 h-4" />
                    <span className="font-semibold">1.2M reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-xl"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our showcase services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border-2 border-border">
              <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                How long does a typical showcase project take?
              </h3>
              <p className="text-muted-foreground pl-7">
                Most projects are completed within 2-4 weeks, from initial consultation to final
                delivery. Rush services are available for time-sensitive launches.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border-2 border-border">
              <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                What's included in a brand showcase package?
              </h3>
              <p className="text-muted-foreground pl-7">
                Each package includes professional photography, custom graphic design, social media
                content creation, strategic planning, and performance tracking. We tailor every
                package to your specific needs and goals.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border-2 border-border">
              <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                Do you work with brands at any stage?
              </h3>
              <p className="text-muted-foreground pl-7">
                Absolutely! We specialize in emerging brands but work with businesses at all
                stages—from startups launching their first product to established brands looking to
                refresh their image.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border-2 border-border">
              <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                What makes your showcases different from others?
              </h3>
              <p className="text-muted-foreground pl-7">
                We combine professional photography, strategic marketing expertise, and authentic
                storytelling to create showcases that don't just look beautiful—they drive real
                business results and genuine audience connection.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border-2 border-border">
              <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                Can I track the progress of my project?
              </h3>
              <p className="text-muted-foreground pl-7">
                Yes! All clients receive access to our dashboard where you can monitor project
                status, review deliverables, communicate with our team, and track performance
                metrics in real-time.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm border-2 border-border">
              <h3 className="text-lg font-heading font-semibold mb-3 flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                What if I need revisions or adjustments?
              </h3>
              <p className="text-muted-foreground pl-7">
                Every package includes revision rounds to ensure you're completely satisfied with
                the final result. We work collaboratively with you throughout the process to ensure
                your vision is perfectly realized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-primary rounded-2xl p-12 shadow-2xl">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8">
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
