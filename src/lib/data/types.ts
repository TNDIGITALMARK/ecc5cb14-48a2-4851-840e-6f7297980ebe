// Type definitions for Michelle Louis Brand Showcase Platform

export type BudgetTier = 'starter' | 'premium' | 'elite';

export type SubmissionStatus =
  | 'submission_received'
  | 'content_creation'
  | 'review_ready'
  | 'final_delivery'
  | 'completed';

export type ShowcaseCategory = 'tech' | 'fashion' | 'food' | 'beauty' | 'lifestyle' | 'other';

export interface BrandSubmission {
  id: string;
  brandName: string;
  parentCompany: string;
  showcaseInstructions: string;
  budgetTier: BudgetTier;
  status: SubmissionStatus;
  estimatedDelivery: string;
  createdAt: string;
  updatedAt: string;
  revisionCount: number;
  maxRevisions: number;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  brandName: string;
  category: ShowcaseCategory;
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  metrics?: {
    engagementIncrease?: string;
    reachGrowth?: string;
    conversionRate?: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export interface StatusUpdate {
  id: string;
  submissionId: string;
  status: SubmissionStatus;
  message: string;
  timestamp: string;
}

export interface PricingTier {
  id: BudgetTier;
  name: string;
  price: number;
  turnaround: string;
  features: string[];
  revisions: number;
  popular?: boolean;
}
