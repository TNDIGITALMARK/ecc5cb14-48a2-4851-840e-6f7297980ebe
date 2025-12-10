'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { showcaseItems } from '@/lib/data/mock-data';
import { ShowcaseCategory } from '@/lib/data/types';
import { TrendingUp, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterCategory = ShowcaseCategory | 'all';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [selectedShowcase, setSelectedShowcase] = useState<string | null>(null);

  const categories: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Showcases' },
    { id: 'tech', label: 'Technology' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'food', label: 'Food & Beverage' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'lifestyle', label: 'Lifestyle' },
  ];

  const filteredShowcases =
    selectedCategory === 'all'
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === selectedCategory);

  const selectedItem = showcaseItems.find((item) => item.id === selectedShowcase);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Showcase Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful brand transformations. Each showcase tells a
              unique story of growth and engagement.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium transition-all',
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShowcases.map((showcase) => (
              <div
                key={showcase.id}
                className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedShowcase(showcase.id)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={showcase.imageUrl}
                    alt={showcase.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {showcase.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-lg line-clamp-1">
                      {showcase.brandName}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full capitalize">
                      {showcase.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {showcase.description}
                  </p>

                  {/* Metrics */}
                  {showcase.metrics && (
                    <div className="flex flex-wrap gap-3 text-xs">
                      {showcase.metrics.engagementIncrease && (
                        <div className="flex items-center gap-1 text-success">
                          <TrendingUp className="w-3 h-3" />
                          <span>{showcase.metrics.engagementIncrease}</span>
                        </div>
                      )}
                      {showcase.metrics.reachGrowth && (
                        <span className="text-muted-foreground">
                          {showcase.metrics.reachGrowth}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {showcase.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/5 text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredShowcases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No showcases found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedShowcase(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedShowcase(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="relative h-96">
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-2">{selectedItem.title}</h2>
                  <p className="text-muted-foreground">{selectedItem.brandName}</p>
                </div>
                <span className="px-3 py-1 bg-muted rounded-full text-sm capitalize">
                  {selectedItem.category}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              {/* Before & After */}
              {selectedItem.beforeImageUrl && selectedItem.afterImageUrl && (
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium mb-2">Before</p>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={selectedItem.beforeImageUrl}
                        alt="Before"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">After</p>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={selectedItem.afterImageUrl}
                        alt="After"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Metrics */}
              {selectedItem.metrics && (
                <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 rounded-lg mb-6">
                  {selectedItem.metrics.engagementIncrease && (
                    <div>
                      <div className="text-2xl font-bold text-success mb-1">
                        {selectedItem.metrics.engagementIncrease}
                      </div>
                      <div className="text-xs text-muted-foreground">Engagement</div>
                    </div>
                  )}
                  {selectedItem.metrics.reachGrowth && (
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {selectedItem.metrics.reachGrowth}
                      </div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                  )}
                  {selectedItem.metrics.conversionRate && (
                    <div>
                      <div className="text-2xl font-bold text-accent mb-1">
                        {selectedItem.metrics.conversionRate}
                      </div>
                      <div className="text-xs text-muted-foreground">Conversions</div>
                    </div>
                  )}
                </div>
              )}

              {/* Testimonial */}
              {selectedItem.testimonial && (
                <div className="bg-primary/5 p-6 rounded-lg mb-6 border-l-4 border-primary">
                  <p className="text-foreground italic mb-4">"{selectedItem.testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{selectedItem.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{selectedItem.testimonial.role}</p>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
