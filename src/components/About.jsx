import React from 'react';

function About() {
  return (
    <section id="about" className="py-24 bg-[var(--terracotta-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop" 
                alt="Our passionate local food guide sharing stories"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <blockquote className="text-[var(--charcoal)] italic">
                &ldquo;Food is the fastest way to understand a culture. Every bite tells a story.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--terracotta)]" />
                <div>
                  <p className="font-semibold text-[var(--charcoal)]">Maria Santos</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Founder</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-[var(--terracotta)]/20 rounded-full text-sm font-medium text-[var(--terracotta)]">
              Our Story
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--charcoal)] leading-tight text-balance">
              Born from a Love of Hidden Corners
            </h2>
            
            <div className="space-y-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
              <p>
                Entrecalles began in 2018 when our founder, a lifelong local, realized that 
                the best food in the city was hiding in plain sight&mdash;between the streets, 
                in unmarked doorways, and behind family-run counters.
              </p>
              <p>
                We partner with third-generation bakers, passionate sommeliers, and home 
                cooks who have never needed a sign to draw a crowd. Our tours aren&apos;t just 
                about eating&mdash;they&apos;re about connecting with the heartbeat of each neighborhood.
              </p>
            </div>
            
            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--terracotta)] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)]">Local First</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">100% of our partners are locally owned</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--olive)] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)]">Small Groups</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">Maximum 10 guests per tour</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--charcoal)] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)]">Authentic Routes</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">Off the beaten tourist path</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--terracotta)] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--charcoal)]">Generous Portions</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">Come hungry, leave satisfied</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
