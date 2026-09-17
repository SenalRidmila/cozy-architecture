import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Share2, Briefcase, Send } from 'lucide-react';

const quickLinks = [
  { label: 'Architecture Design', href: '/architecture-design' },
  { label: 'Interior Design', href: '/interior-design' },
  { label: 'Landscaping', href: '/landscaping' },
  { label: 'Vastu Shastra', href: '/vastu-shastra' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Careers', href: '#' },
];

const socials = [
  { icon: <Globe size={15} />, href: '#', label: 'Website' },
  { icon: <Share2 size={15} />, href: '#', label: 'Instagram' },
  { icon: <Briefcase size={15} />, href: '#', label: 'LinkedIn' },
  { icon: <Send size={15} />, href: '#', label: 'Telegram' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d2b55]">
      {/* CTA strip */}
      <div className="bg-[#B89947] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-lg">Ready to start your project?</h3>
            <p className="text-white/75 text-sm mt-0.5">Let&apos;s turn your vision into a reality — together.</p>
          </div>
          <a
            href="#contact"
            id="footer-cta-contact"
            className="px-7 py-3 bg-white text-[#B89947] font-bold rounded-full hover:bg-[#0d2b55] hover:text-white transition-all duration-300 shadow-md text-sm whitespace-nowrap"
          >
            Contact Us Today
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-12 py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

        {/* Brand */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#B89947]">
              <Image src="/Firefly.png" alt="Cozy Architecture Logo" fill sizes="44px" className="object-cover" />
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-[15px] leading-tight">Cozy Architecture</p>
              <p className="text-white/35 text-xs">Sri Lanka</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-7 mb-6 max-w-[200px]">
            Designing spaces that inspire, built with precision and crafted with heart.
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#B89947] hover:text-white transition-all duration-300">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3 flex flex-col items-center">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/50 text-sm hover:text-[#B89947] transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Company</h4>
          <ul className="space-y-3 flex flex-col items-center">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/50 text-sm hover:text-[#B89947] transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Reach Us</h4>
          <ul className="space-y-4 flex flex-col items-center">
            <li className="flex flex-col items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#B89947] shrink-0" />
              <a href="tel:+94112345678" className="text-white/50 text-sm hover:text-[#B89947] transition-colors">+94 11 234 5678</a>
            </li>
            <li className="flex flex-col items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#B89947] shrink-0" />
              <a href="mailto:hello@cozyarchitecture.lk" className="text-white/50 text-sm hover:text-[#B89947] transition-colors">hello@cozyarchitecture.lk</a>
            </li>
            <li className="flex flex-col items-center gap-1.5 mt-2">
              <MapPin className="w-4 h-4 text-[#B89947] shrink-0" />
              <span className="text-white/50 text-sm leading-6">42 Bauddhaloka Mawatha,<br />Colombo 07, Sri Lanka</span>
            </li>
          </ul>
        </div>
      </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center">
          <p className="text-white/30 text-xs">© {year} Cozy Architecture. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-[#B89947] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#B89947] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
