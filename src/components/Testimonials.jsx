import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    tour: 'Old Town Tapas Trail',
    text: 'This was the highlight of our trip! Our guide knew everyone by name and took us to places we never would have found on our own. The stories behind each dish made the food taste even better.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Thomas Weber',
    location: 'Berlin, Germany',
    tour: 'Market to Table Experience',
    text: 'Cooking with ingredients we picked out together, learning techniques from a real chef, and then eating our creation—it felt like being welcomed into a local family. Unforgettable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Buenos Aires, Argentina',
    tour: 'Evening Wine & Dine',
    text: 'As a foodie, I thought I knew what to expect. I was wrong. Entrecalles showed me hidden gems I had walked past a hundred times. The wine pairings were perfect.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[var(--terracotta)]/10 rounded-full text-sm font-medium text-[var(--terracotta)] mb-4">
            Guest Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] mb-4 text-balance">
            Memories Made Between Streets
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our guests have to say 
            about their culinary adventures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[var(--cream)] rounded-3xl p-8 space-y-6"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--terracotta)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-[var(--charcoal)] leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Tour Tag */}
              <div className="inline-block px-3 py-1 bg-[var(--terracotta)]/10 rounded-full text-sm text-[var(--terracotta)]">
                {testimonial.tour}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[var(--charcoal)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div id="book" className="mt-24 bg-[var(--charcoal)] rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Ready to Discover Your Next Favorite Bite?
          </h3>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
            Join us for an unforgettable journey through the flavors, 
            stories, and hidden corners of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#tours" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--terracotta)] text-white rounded-full font-medium hover:bg-white hover:text-[var(--charcoal)] transition-colors"
            >
              Browse All Tours
            </a>
            <a 
              href="mailto:hello@entrecalles.com" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[var(--charcoal)] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
