'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { mockSubmission } from '@/lib/data/mock-data';
import {
  CheckCircle2,
  Circle,
  Clock,
  MessageSquare,
  FileText,
  Calendar,
  TrendingUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const statusSteps = [
  { id: 'submission_received', label: 'Submission Received', icon: CheckCircle2 },
  { id: 'content_creation', label: 'Content Creation', icon: FileText },
  { id: 'review_ready', label: 'Review Ready', icon: Clock },
  { id: 'final_delivery', label: 'Final Delivery', icon: TrendingUp },
  { id: 'completed', label: 'Completed', icon: CheckCircle2 },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'status' | 'messages'>('status');
  const submission = mockSubmission;

  const currentStepIndex = statusSteps.findIndex((step) => step.id === submission.status);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-heading font-bold mb-2">Project Dashboard</h1>
            <p className="text-muted-foreground">
              Track your brand showcase project in real-time
            </p>
          </div>

          {/* Project Overview Card */}
          <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Brand Name</p>
                <p className="text-xl font-heading font-bold">{submission.brandName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Package</p>
                <p className="text-xl font-semibold capitalize">{submission.budgetTier} Package</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Est. Delivery</p>
                <p className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  {new Date(submission.estimatedDelivery).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab('status')}
              className={cn(
                'px-6 py-3 font-medium transition-colors relative',
                activeTab === 'status'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Project Status
              {activeTab === 'status' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={cn(
                'px-6 py-3 font-medium transition-colors relative',
                activeTab === 'messages'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Messages
              {activeTab === 'messages' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          </div>

          {/* Status Tab */}
          {activeTab === 'status' && (
            <div className="space-y-8">
              {/* Progress Timeline */}
              <div className="bg-card rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Project Progress</h2>

                {/* Progress Bar */}
                <div className="relative mb-12">
                  <div className="absolute top-5 left-0 right-0 h-1 bg-muted" />
                  <div
                    className="absolute top-5 left-0 h-1 bg-primary transition-all duration-500"
                    style={{
                      width: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%`,
                    }}
                  />

                  <div className="relative flex justify-between">
                    {statusSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isCompleted = index <= currentStepIndex;
                      const isCurrent = index === currentStepIndex;

                      return (
                        <div key={step.id} className="flex flex-col items-center">
                          <div
                            className={cn(
                              'w-10 h-10 rounded-full flex items-center justify-center transition-all mb-3',
                              isCompleted
                                ? 'bg-primary text-primary-foreground shadow-lg'
                                : 'bg-muted text-muted-foreground',
                              isCurrent && 'ring-4 ring-primary/20 animate-pulse'
                            )}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <p
                            className={cn(
                              'text-xs text-center max-w-[100px]',
                              isCompleted ? 'text-foreground font-medium' : 'text-muted-foreground'
                            )}
                          >
                            {step.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Current Status Message */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Content Creation Phase - 60% Complete</h3>
                      <p className="text-muted-foreground mb-4">
                        Our creative team is crafting your brand showcase with professional
                        photography and compelling storytelling. Initial concepts are ready for your
                        review.
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          Updated 2 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Submission Details */}
                <div className="bg-card rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-heading font-bold mb-4">Submission Details</h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground mb-1">Parent Company</dt>
                      <dd className="font-medium">{submission.parentCompany}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">Showcase Instructions</dt>
                      <dd className="font-medium leading-relaxed">
                        {submission.showcaseInstructions}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">Submitted</dt>
                      <dd className="font-medium">
                        {new Date(submission.createdAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Revisions & Support */}
                <div className="bg-card rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-heading font-bold mb-4">Revisions & Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">Revisions Used</p>
                        <p className="text-sm text-muted-foreground">Track your revision count</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          {submission.revisionCount}/{submission.maxRevisions}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium mb-1">Need to discuss changes?</p>
                          <p className="text-sm text-muted-foreground mb-3">
                            Our team is here to help refine your showcase.
                          </p>
                          <button className="text-sm font-medium text-accent hover:underline">
                            Send Message →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Team Messages</h2>

              <div className="space-y-6">
                {/* Message 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-semibold">ML</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold">Michelle Louis</p>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm leading-relaxed">
                        Hi! Initial concepts are ready for your review. We've created a stunning
                        visual narrative that emphasizes your natural ingredients and sustainable
                        packaging. Preview link has been sent to your email. Looking forward to
                        your feedback!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-semibold">You</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold">You</p>
                        <span className="text-xs text-muted-foreground">3 days ago</span>
                      </div>
                      <p className="text-sm leading-relaxed">
                        Thank you! Very excited to see the initial concepts. The earth tone palette
                        and clean photography sound perfect for our brand direction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="mt-8 pt-6 border-t border-border">
                  <label className="block text-sm font-medium mb-2">Send a Message</label>
                  <div className="flex gap-3">
                    <textarea
                      placeholder="Type your message here..."
                      rows={3}
                      className="flex-1 px-4 py-3 rounded-lg resize-none"
                    />
                    <button className="px-6 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all self-end">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
