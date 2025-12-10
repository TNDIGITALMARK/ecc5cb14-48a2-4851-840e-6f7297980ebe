'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { pricingTiers } from '@/lib/data/mock-data';
import { Check, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

type FormData = {
  brandName: string;
  parentCompany: string;
  showcaseInstructions: string;
  budgetTier: 'starter' | 'premium' | 'elite';
  email: string;
  phone: string;
};

export default function SubmitPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    brandName: '',
    parentCompany: '',
    showcaseInstructions: '',
    budgetTier: 'premium',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-4xl font-heading font-bold mb-4">Submission Received!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for choosing Michelle Louis Brand Showcase. We've received your submission
              and will begin working on your project shortly.
            </p>
            <div className="bg-card p-6 rounded-lg shadow-md mb-8 text-left">
              <h3 className="font-semibold mb-4">What happens next:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>You'll receive a confirmation email within 10 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Our team will review your requirements within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span>Track your project status in your dashboard</span>
                </li>
              </ul>
            </div>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            >
              Go to Dashboard
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Submit Your Brand
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your brand and let's create something amazing together
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all',
                      currentStep >= step
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={cn(
                        'flex-1 h-1 mx-2 transition-all',
                        currentStep > step ? 'bg-primary' : 'bg-muted'
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Brand Info</span>
              <span>Package</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg">
            {/* Step 1: Brand Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => updateFormData('brandName', e.target.value)}
                    placeholder="e.g., Eco Bloom Skincare"
                    className="w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parent Company (if applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.parentCompany}
                    onChange={(e) => updateFormData('parentCompany', e.target.value)}
                    placeholder="e.g., Green Beauty Collective"
                    className="w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Showcase Instructions *
                  </label>
                  <textarea
                    required
                    value={formData.showcaseInstructions}
                    onChange={(e) => updateFormData('showcaseInstructions', e.target.value)}
                    placeholder="Describe how you want your brand showcased. Include target audience, preferred visual style, key messaging, and any specific requirements..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    The more detail you provide, the better we can tailor your showcase
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Package Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Choose Your Package</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {pricingTiers.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => updateFormData('budgetTier', tier.id)}
                        className={cn(
                          'p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg',
                          formData.budgetTier === tier.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border bg-card'
                        )}
                      >
                        {tier.popular && (
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                            <Sparkles className="w-3 h-3" />
                            Most Popular
                          </div>
                        )}
                        <h4 className="font-heading font-bold text-xl mb-2">{tier.name}</h4>
                        <div className="text-3xl font-bold text-primary mb-2">${tier.price}</div>
                        <p className="text-sm text-muted-foreground mb-4">{tier.turnaround}</p>
                        <ul className="space-y-2 text-sm">
                          {tier.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    {pricingTiers.find((t) => t.id === formData.budgetTier)?.name} includes:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pricingTiers
                      .find((t) => t.id === formData.budgetTier)
                      ?.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">Review Your Submission</h4>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground">Brand Name</dt>
                      <dd className="font-medium">{formData.brandName}</dd>
                    </div>
                    {formData.parentCompany && (
                      <div>
                        <dt className="text-muted-foreground">Parent Company</dt>
                        <dd className="font-medium">{formData.parentCompany}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-muted-foreground">Package</dt>
                      <dd className="font-medium">
                        {pricingTiers.find((t) => t.id === formData.budgetTier)?.name} - $
                        {pricingTiers.find((t) => t.id === formData.budgetTier)?.price}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all',
                  currentStep === 1
                    ? 'text-muted-foreground cursor-not-allowed'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                <ChevronLeft className="w-5 h-5" />
                Back
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
                >
                  Continue
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  Submit Brand
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
