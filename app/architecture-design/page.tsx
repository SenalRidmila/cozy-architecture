import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture Design | Cozy Architecture',
  description:
    'Bespoke architectural design services — from residential villas to landmark commercial buildings. We craft spaces that stand the test of time.',
};

const highlights = [
  'Residential & Commercial Design',
  'Concept to Construction Drawings',
  'Sustainable & Eco-Friendly Design',
  '3D Visualization & Walkthroughs',
  'Site Planning & Space Optimization',
  'Heritage & Renovation Projects',
];

const galleryImages = [
  { src: '/1.jpeg', caption: 'Villa Serenity – Colombo 07' },
  { src: '/2.jpeg', caption: 'The Horizon Tower – Kandy' },
  { src: '/3.jpeg', caption: 'Lakeside Manor – Negombo' },
];

export default function ArchitectureDesignPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/1.jpeg"
          alt="Architecture Design by Cozy Architecture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b55]/80 via-[#0d2b55]/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors w-fit"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#B89947]" />
            <span className="text-[#B89947] text-xs font-semibold tracking-[0.3em] uppercase">Our Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-xl">
            Architecture Design
          </h1>
          <p className="mt-4 text-white/75 text-base sm:text-lg max-w-lg leading-7">
            Creating buildings that endure — structured with precision, imagined with artistry.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2b55] leading-tight mb-5">
              Where Vision Becomes
              <span className="block text-[#B89947]">Architecture</span>
            </h2>
            <p className="text-gray-500 leading-8 mb-5">
              At Cozy Architecture, every project begins with listening — understanding how you live, work,
              and dream. Our architects translate your vision into spaces that are not just functional, but
              deeply meaningful.
            </p>
            <p className="text-gray-500 leading-8 mb-8">
              From elegant private residences nestled in the hills to bold commercial landmarks in the city,
              we bring the same commitment to precision and beauty to every design we deliver.
            </p>
            {/* Checklist */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#B89947] shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/2.jpeg"
              alt="Architecture project interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b55]/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2b55] mb-10 text-center">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {galleryImages.map((img) => (
              <div key={img.src} className="group relative rounded-2xl overflow-hidden shadow-md h-60">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b55]/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d2b55] text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to build your dream?</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-7">
          Talk to our architects today and take the first step toward your architectural vision.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B89947] text-white font-semibold rounded-full hover:bg-[#9A7B32] transition-colors shadow-lg text-sm"
        >
          Get a Free Consultation
        </Link>
      </section>
    </main>
  );
}
