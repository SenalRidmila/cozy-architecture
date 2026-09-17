import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vastu Shastra | Cozy Architecture',
  description:
    'Integrating the ancient wisdom of Vastu Shastra into modern design — aligning spaces with natural energy flows for harmony, prosperity, and well-being.',
};

const highlights = [
  'Home & Office Vastu Analysis',
  'Site Selection Guidance',
  'Floor Plan Rectification',
  'Energy Flow Optimization',
  'Main Entrance Orientation',
  'Room Positioning & Layout',
];

const principles = [
  {
    title: 'Panchabhuta',
    desc: 'Balancing the five elements — Earth, Water, Fire, Air, and Space — in every design decision.',
  },
  {
    title: 'Brahmasthan',
    desc: 'The sacred center of the home is kept open and energetically balanced for positive flow.',
  },
  {
    title: 'Disha (Directions)',
    desc: 'Each cardinal direction carries specific energies — we align rooms to harness their benefits.',
  },
];

export default function VastuShashtraPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/9.jpeg"
          alt="Vastu Shastra design by Cozy Architecture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b55]/85 via-[#0d2b55]/55 to-transparent" />
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
            Vastu Shastra
          </h1>
          <p className="mt-4 text-white/75 text-base sm:text-lg max-w-lg leading-7">
            Ancient wisdom, modern living — designing spaces aligned with the natural universe.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-80 lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/5.jpeg"
              alt="Vastu aligned home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b55]/25 to-transparent" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d2b55] leading-tight mb-5">
              Harmony in Every
              <span className="block text-[#B89947]">Corner</span>
            </h2>
            <p className="text-gray-500 leading-8 mb-5">
              Vastu Shastra is the ancient Indian science of space — a timeless system for designing
              environments that promote health, happiness, and prosperity by harmonizing human dwellings
              with the forces of nature.
            </p>
            <p className="text-gray-500 leading-8 mb-8">
              At Cozy Architecture, our Vastu consultants work alongside our design team to ensure that
              every home and office we create is not just beautiful, but energetically balanced for the
              well-being of those who inhabit it.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#B89947] shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2b55] mb-10 text-center">
            Core Vastu Principles We Follow
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#0d2b55] flex items-center justify-center mb-4">
                  <span className="text-[#B89947] text-lg font-bold">✦</span>
                </div>
                <h3 className="text-[#0d2b55] font-bold text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Vastu image strip */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['/9.jpeg', '/6.jpeg', '/1.jpeg'].map((src, i) => (
              <div key={i} className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={src}
                  alt={`Vastu project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b55]/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d2b55] text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-3">Align your space with the universe</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-7">
          Book a Vastu consultation and let our experts guide you toward a more harmonious and prosperous home.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B89947] text-white font-semibold rounded-full hover:bg-[#9A7B32] transition-colors shadow-lg text-sm"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
