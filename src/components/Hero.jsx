import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--terracotta-light)] via-[var(--cream)] to-[var(--cream)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-[var(--terracotta)]/10 rounded-full">
            <span className="text-sm font-medium text-[var(--terracotta)]">
              Culinary Adventures Await
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-[var(--charcoal)]">
            Taste the Soul of Every{' '}
            <span className="text-[var(--terracotta)]">Neighborhood</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-lg leading-relaxed">
            Wander through hidden alleys, discover family-run kitchens, and savor authentic 
            flavors with our curated food tours. Every street has a story to tell.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#tours" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--terracotta)] text-white rounded-full font-medium hover:bg-[var(--charcoal)] transition-colors"
            >
              Explore Tours
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--charcoal)] text-[var(--charcoal)] rounded-full font-medium hover:bg-[var(--charcoal)] hover:text-white transition-colors"
            >
              Our Story
            </a>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 pt-8 border-t border-[var(--border)]">
            <div>
              <p className="text-3xl font-bold text-[var(--charcoal)]">50+</p>
              <p className="text-sm text-[var(--muted-foreground)]">Local Partners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--charcoal)]">12</p>
              <p className="text-sm text-[var(--muted-foreground)]">Neighborhoods</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--charcoal)]">5k+</p>
              <p className="text-sm text-[var(--muted-foreground)]">Happy Guests</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image Grid */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--muted)]">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=750&fit=crop" 
                alt="Cozy restaurant interior with warm lighting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--muted)]">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop" 
                alt="Delicious local dishes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--muted)]">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop" 
                alt="Chef preparing traditional food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--muted)]">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=750&fit=crop" 
                alt="Charming street cafe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[var(--terracotta)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[var(--charcoal)]">4.9 Rating</p>
                <p className="text-sm text-[var(--muted-foreground)]">2,500+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
