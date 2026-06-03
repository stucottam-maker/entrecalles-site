import React from 'react';

const tours = [
  {
    id: 1,
    title: 'Old Town Tapas Trail',
    description: 'Meander through cobblestone streets sampling traditional tapas, from jamón ibérico to patatas bravas, at family-run bodegas.',
    duration: '3.5 hours',
    stops: 6,
    price: 85,
    image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&h=400&fit=crop',
    tag: 'Most Popular'
  },
  {
    id: 2,
    title: 'Market to Table Experience',
    description: 'Start at the local market, select fresh ingredients with our guide, then cook and feast at a hidden gem restaurant.',
    duration: '4 hours',
    stops: 4,
    price: 120,
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop',
    tag: 'Hands-On'
  },
  {
    id: 3,
    title: 'Sweet Treats & Coffee',
    description: 'Discover artisan bakeries, chocolate makers, and specialty coffee roasters tucked away in charming neighborhoods.',
    duration: '2.5 hours',
    stops: 5,
    price: 65,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
    tag: 'Morning Tour'
  },
  {
    id: 4,
    title: 'Evening Wine & Dine',
    description: 'As the sun sets, explore wine bars and bistros, pairing local vintages with seasonal bites under string lights.',
    duration: '4 hours',
    stops: 5,
    price: 110,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
    tag: 'Sunset'
  }
];

function Tours() {
  return (
    <section id="tours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--terracotta)]/10 rounded-full text-sm font-medium text-[var(--terracotta)] mb-4">
            Our Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-4 text-balance">
            Curated Culinary Journeys
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Each tour is crafted to immerse you in local culture, connecting you with 
            the people and places that make each neighborhood unique.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id} 
              className="group bg-[var(--cream)] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--charcoal)]">
                  {tour.tag}
                </span>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-[var(--charcoal)]">{tour.title}</h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">{tour.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {tour.stops} stops
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <div>
                    <span className="text-2xl font-bold text-[var(--charcoal)]">${tour.price}</span>
                    <span className="text-[var(--muted-foreground)]"> / person</span>
                  </div>
                  <button className="px-6 py-3 bg-[var(--terracotta)] text-white rounded-full font-medium hover:bg-[var(--charcoal)] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
