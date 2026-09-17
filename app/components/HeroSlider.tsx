'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/1.jpeg', alt: 'Elegant modern architecture' },
  { src: '/2.jpeg', alt: 'Luxury residential design' },
  { src: '/3.jpeg', alt: 'Contemporary interior spaces' },
  { src: '/4.jpeg', alt: 'Sustainable landscape design' },
  { src: '/5.jpeg', alt: 'Timeless architectural masterpiece' },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => { setCurrent(index); setTransitioning(false); }, 200);
  }, [transitioning]);

  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="home" className="relative w-full h-screen min-h-[580px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={i === 0} sizes="100vw" />
        </div>
      ))}

      {/* Overlay - Centered Gradient */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/55 via-black/20 to-black/70" />

      {/* Text Content - Centered */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-8 sm:px-16 lg:px-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-14 bg-[#B89947]" />
          <span className="text-[#B89947] text-sm font-bold tracking-[0.35em] uppercase drop-shadow-md">Welcome</span>
          <div className="h-px w-14 bg-[#B89947]" />
        </div>

        <h1
          className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-tight drop-shadow-2xl mb-6"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
        >
          WELCOME! <br />
          <span className="text-[#B89947]">AYUBOWAN!</span>
        </h1>

        <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium drop-shadow-lg mb-10">
          Crafting spaces that blend elegance, functionality, and timeless beauty. <br className="hidden sm:block" />
          Your dream architecture, realized.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-[#B89947] text-white font-bold rounded-full hover:bg-[#0d2b55] transition-all duration-300 shadow-xl hover:scale-105 text-sm uppercase tracking-wide cursor-pointer"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Arrows */}
      <button id="slider-prev" onClick={prev} aria-label="Previous slide"
        className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#B89947] hover:border-[#B89947] transition-all duration-300 cursor-pointer">
        <ChevronLeft size={24} />
      </button>
      <button id="slider-next" onClick={next} aria-label="Next slide"
        className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#B89947] hover:border-[#B89947] transition-all duration-300 cursor-pointer">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((_, i) => (
          <button key={i} id={`slider-dot-${i}`} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${i === current ? 'w-10 h-2 bg-[#B89947]' : 'w-2 h-2 bg-white/45 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
