'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const projects = [
  { src: '/1.jpeg', title: 'Villa Serenity', category: 'Residential', location: 'Colombo 07' },
  { src: '/2.jpeg', title: 'The Horizon Tower', category: 'Commercial', location: 'Kandy' },
  { src: '/3.jpeg', title: 'Garden Retreat', category: 'Landscaping', location: 'Galle' },
  { src: '/4.jpeg', title: 'Zen Interiors', category: 'Interior Design', location: 'Colombo 03' },
  { src: '/5.jpeg', title: 'Lakeside Manor', category: 'Residential', location: 'Negombo' },
  { src: '/6.jpeg', title: 'Vastu Harmony Home', category: 'Vastu Shastra', location: 'Kurunegala' },
];

const categories = ['All', 'Residential', 'Commercial', 'Interior Design', 'Landscaping', 'Vastu Shastra'];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof projects[0] | null>(null);
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative bg-white overflow-hidden">

      {/* Top Spacer */}
      <div className="w-full h-[80px] lg:h-[120px]"></div>

      {/* Watermark Text Background ("OUR PORTFOLIO") */}
      <div className="absolute top-[100px] lg:top-[120px] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
        <h2 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black text-gray-50 uppercase tracking-tighter whitespace-nowrap leading-none">
          Our Portfolio
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-12 relative z-10 flex flex-col items-center">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 uppercase tracking-widest">
              Portfolio
            </h3>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d2b55] leading-snug">
              A curated selection of our <span className="text-[#B89947] italic font-light">finest work.</span>
            </h4>
            <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-base lg:text-lg leading-[1.9] font-light text-center">
              Each project is a unique story of collaboration, craftsmanship, and a deep understanding of space and environment.
            </p>
          </div>

          {/* Filter Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-2 py-2 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-colors duration-300 cursor-pointer group ${filter === cat
                  ? 'text-[#0d2b55]'
                  : 'text-gray-400 hover:text-[#B89947]'
                  }`}
              >
                {cat}
                {/* Active Indicator Line (Animated) */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#B89947] transition-all duration-300 ${filter === cat ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* අනිවාර්ය හිස් ඉඩ (Guaranteed Spacer) - සාමාන්‍ය (Normal) ප්‍රමාණයට සකසා ඇත */}
          <div className="w-full h-[40px] lg:h-[60px]"></div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {filtered.map((project) => (
              <div
                key={project.src}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white flex flex-col"
                onClick={() => setLightbox(project)}
              >
                <div className="relative h-64 lg:h-72">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#0d2b55]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-[#B89947] flex items-center justify-center shadow-lg transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="px-6 py-6 text-center border-t border-gray-100 bg-white">
                  <span className="inline-block px-3 py-1 mb-3 bg-[#f8f5f0] text-[#B89947] text-[11px] font-bold tracking-widest uppercase rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-[#0d2b55] text-lg mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="w-full h-[100px] lg:h-[150px]"></div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-10"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[65vh] md:h-[75vh]">
              <Image src={lightbox.src} alt={lightbox.title} fill className="object-contain lg:object-cover" sizes="90vw" />
            </div>
            <div className="bg-white px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-[#0d2b55] font-bold text-xl">{lightbox.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{lightbox.category} • {lightbox.location}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#B89947] flex items-center justify-center text-gray-600 hover:text-white transition-all cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}