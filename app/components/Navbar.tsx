'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Architecture Design', href: '/architecture-design' },
  { label: 'Interior Design', href: '/interior-design' },
  { label: 'Landscaping', href: '/landscaping' },
  { label: 'Vastu Shastra', href: '/vastu-shastra' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (id.startsWith('/#')) id = id.replace('/', '');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Logo Click Handler
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      // Hero section එකට (පිටුවේ ඉහළටම) smooth scroll වීම
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navBg = scrolled
    ? 'bg-[#f8f5f0] shadow-md'
    : 'bg-gradient-to-b from-black/70 via-black/20 to-transparent';

  const textColor = scrolled ? 'text-[#0d2b55]' : 'text-white drop-shadow-md';
  const hoverColor = 'hover:text-[#B89947]';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className={`max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex items-center relative transition-all duration-500 ${scrolled ? 'h-[70px] lg:h-[75px]' : 'h-[80px] lg:h-[90px]'}`}>

          {/* Hanging Logo (Absolute Position) - Smooth Scroll එකතු කර ඇත */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className={`absolute top-0 left-6 lg:left-12 bg-white rounded-b-[24px] shadow-lg z-50 transition-all duration-500 hover:translate-y-1 cursor-pointer ${scrolled ? 'px-2 pt-2 pb-2.5' : 'px-2.5 pt-3 pb-4'}`}
          >
            <div className={`relative rounded-full overflow-hidden border-2 border-[#B89947] bg-white transition-all duration-500 ${scrolled ? 'w-[50px] h-[50px] lg:w-[58px] lg:h-[58px]' : 'w-[60px] h-[60px] lg:w-[75px] lg:h-[75px]'}`}>
              <Image src="/Firefly.png" alt="Logo" fill className="object-cover" priority sizes="75px" />
            </div>
          </Link>

          {/* 1. Invisible Spacer */}
          <div className="hidden xl:block w-[150px] shrink-0"></div>

          {/* 2. Desktop Nav */}
          <div className="hidden xl:flex flex-1 justify-center">
            <nav className="flex items-center gap-7 lg:gap-10 whitespace-nowrap">
              {navLinks.map((link) => (
                link.href.includes('#') ? (
                  <button key={link.label} onClick={() => scrollTo(link.href)}
                    className={`text-[15px] font-bold transition-colors cursor-pointer ${textColor} ${hoverColor}`}>
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.label} href={link.href}
                    className={`text-[15px] font-bold transition-colors ${textColor} ${hoverColor}`}>
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Mobile Toggle */}
          <button className={`xl:hidden absolute right-6 lg:right-12 z-50 transition-colors duration-300 ${textColor}`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#f8f5f0]/98 backdrop-blur-md transition-all duration-300 xl:hidden flex flex-col items-center justify-center gap-6 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          link.href.includes('#') ? (
            <button key={link.label} onClick={() => scrollTo(link.href)} className="text-[#0d2b55] text-2xl font-bold hover:text-[#B89947] transition-colors">
              {link.label}
            </button>
          ) : (
            <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="text-[#0d2b55] text-2xl font-bold hover:text-[#B89947] transition-colors">
              {link.label}
            </Link>
          )
        ))}
      </div>
    </>
  );
}