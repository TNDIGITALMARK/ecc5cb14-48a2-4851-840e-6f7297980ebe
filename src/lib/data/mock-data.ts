import { ShowcaseItem, PricingTier, BrandSubmission } from './types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    price: 297,
    turnaround: '7-10 business days',
    features: [
      'Professional brand showcase',
      '3 social media post designs',
      'Basic website feature integration',
      'Brand story development',
      '1 revision included',
    ],
    revisions: 1,
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 497,
    turnaround: '5-7 business days',
    features: [
      'Everything in Starter',
      '6 social media post designs',
      'Advanced website feature showcase',
      'Before & after comparisons',
      'Engagement metrics tracking',
      '3 revisions included',
      'Priority support',
    ],
    revisions: 3,
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite Package',
    price: 897,
    turnaround: '3-5 business days',
    features: [
      'Everything in Premium',
      '12 social media post designs',
      'Full brand story video',
      'Custom landing page',
      'Influencer outreach strategy',
      'Performance analytics dashboard',
      'Unlimited revisions',
      'Dedicated account manager',
    ],
    revisions: 999,
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    id: '1',
    title: 'CloudSync Pro - SaaS Productivity Platform',
    brandName: 'CloudSync Pro',
    category: 'tech',
    description:
      'Transformed a new SaaS productivity app into a compelling visual story showcasing modern UI design and impressive growth metrics. Featured across multiple tech platforms.',
    imageUrl: '/images/showcase/tech-showcase.png',
    beforeImageUrl: '/images/showcase/tech-showcase.png',
    afterImageUrl: '/images/showcase/tech-showcase.png',
    metrics: {
      engagementIncrease: '+340%',
      reachGrowth: '2.4M impressions',
      conversionRate: '+156%',
    },
    testimonial: {
      quote:
        'Michelle transformed our product launch into a viral sensation. The showcase drove more signups in one week than our entire previous quarter.',
      author: 'Sarah Chen',
      role: 'CEO, CloudSync Pro',
    },
    tags: ['SaaS', 'Technology', 'B2B', 'UI Design'],
    featured: true,
    createdAt: '2024-02-15',
  },
  {
    id: '2',
    title: 'Luna Threads - Sustainable Fashion',
    brandName: 'Luna Threads',
    category: 'fashion',
    description:
      'Created an elegant visual narrative for a sustainable fashion brand, emphasizing eco-friendly practices and lifestyle photography that resonates with conscious consumers.',
    imageUrl: '/images/showcase/fashion-showcase.png',
    beforeImageUrl: '/images/showcase/fashion-showcase.png',
    afterImageUrl: '/images/showcase/fashion-showcase.png',
    metrics: {
      engagementIncrease: '+285%',
      reachGrowth: '1.8M impressions',
      conversionRate: '+92%',
    },
    testimonial: {
      quote:
        'The storytelling approach Michelle took elevated our brand from unknown to sought-after. We sold out within 48 hours of the showcase launch.',
      author: 'Marcus Rodriguez',
      role: 'Founder, Luna Threads',
    },
    tags: ['Fashion', 'Sustainability', 'Lifestyle', 'E-commerce'],
    featured: true,
    createdAt: '2024-01-28',
  },
  {
    id: '3',
    title: 'Artisan Bites - Gourmet Snacks',
    brandName: 'Artisan Bites',
    category: 'food',
    description:
      'Developed a mouth-watering visual showcase featuring artisanal product photography and ingredient storytelling that positioned this brand as premium quality.',
    imageUrl: '/images/showcase/food-showcase.png',
    metrics: {
      engagementIncrease: '+420%',
      reachGrowth: '3.2M impressions',
      conversionRate: '+210%',
    },
    tags: ['Food & Beverage', 'Gourmet', 'Product Photography'],
    featured: false,
    createdAt: '2024-02-01',
  },
  {
    id: '4',
    title: 'Eco Bloom Skincare - Natural Beauty',
    brandName: 'Eco Bloom Skincare',
    category: 'beauty',
    description:
      'Crafted a luxurious yet natural brand showcase emphasizing clean ingredients and sustainable packaging, with earth-toned aesthetics that appeal to eco-conscious millennials.',
    imageUrl: '/images/showcase/beauty-showcase.png',
    metrics: {
      engagementIncrease: '+198%',
      reachGrowth: '1.5M impressions',
    },
    testimonial: {
      quote: 'The showcase perfectly captured our brand ethos. Sales tripled in the first month.',
      author: 'Emma Green',
      role: 'CEO, Eco Bloom',
    },
    tags: ['Beauty', 'Skincare', 'Natural Products', 'Sustainable'],
    featured: false,
    createdAt: '2024-01-20',
  },
  {
    id: '5',
    title: 'Momentum Fitness - Wellness App',
    brandName: 'Momentum',
    category: 'lifestyle',
    description:
      'Designed an energetic showcase for a fitness tracking app, featuring dynamic visuals and user success stories that drive app downloads and engagement.',
    imageUrl: '/images/showcase/tech-showcase.png',
    metrics: {
      engagementIncrease: '+312%',
      reachGrowth: '2.1M impressions',
      conversionRate: '+145%',
    },
    tags: ['Fitness', 'Wellness', 'Mobile App', 'Health Tech'],
    featured: false,
    createdAt: '2024-02-10',
  },
  {
    id: '6',
    title: 'Heritage Coffee Co. - Specialty Roasters',
    brandName: 'Heritage Coffee Co.',
    category: 'food',
    description:
      'Created an aromatic visual journey showcasing the craft of specialty coffee roasting, from bean to cup, with rich photography and origin storytelling.',
    imageUrl: '/images/showcase/food-showcase.png',
    tags: ['Coffee', 'Food & Beverage', 'Artisan', 'Storytelling'],
    featured: false,
    createdAt: '2024-01-15',
  },
];

export const mockSubmission: BrandSubmission = {
  id: 'sub-123',
  brandName: 'Eco Bloom Skincare',
  parentCompany: 'Green Beauty Collective',
  showcaseInstructions:
    'Focus on natural ingredients and sustainable packaging. Target audience is environmentally conscious millennials. Prefer earth tones and clean product photography.',
  budgetTier: 'premium',
  status: 'content_creation',
  estimatedDelivery: '2024-03-15',
  createdAt: '2024-03-01',
  updatedAt: '2024-03-08',
  revisionCount: 1,
  maxRevisions: 3,
};
