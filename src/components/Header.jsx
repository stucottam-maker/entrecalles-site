import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight text-[var(--charcoal)]">
          entre<span className="text-[var(--terracotta)]">calles</span>
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#tours" className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors">
              Tours
            </a>
          </li>
          <li>
            <a href="#about" className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-[var(--charcoal)] hover:text-[var(--terracotta)] transition-colors">
              Stories
            </a>
          </li>
          <li>
            <a 
              href="#book" 
              className="px-5 py-2.5 bg-[var(--terracotta)] text-white rounded-full hover:bg-[var(--charcoal)] transition-colors"
            >
              Book a Tour
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--cream)] border-t border-[var(--border)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#tours" className="block text-[var(--charcoal)] hover:text-[var(--terracotta)]">Tours</a>
            </li>
            <li>
              <a href="#about" className="block text-[var(--charcoal)] hover:text-[var(--terracotta)]">About</a>
            </li>
            <li>
              <a href="#testimonials" className="block text-[var(--charcoal)] hover:text-[var(--terracotta)]">Stories</a>
            </li>
            <li>
              <a 
                href="#book" 
                className="inline-block px-5 py-2.5 bg-[var(--terracotta)] text-white rounded-full"
              >
                Book a Tour
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
