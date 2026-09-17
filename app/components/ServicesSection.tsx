import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'architecture-design',
    title: 'Architecture Design',
    subtitle: 'Form Meets Function',
    description:
      'From concept sketches to construction drawings, we create stunning buildings that stand the test of time. Residential, commercial, and mixed-use — we design with purpose.',
    image: '/6.jpeg',
    href: '/architecture-design',
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    subtitle: 'Spaces That Breathe',
    description:
      'Every material, texture, and light source is chosen with intent to create rooms that feel both luxurious and liveable.',
    image: '/7.jpeg',
    href: '/interior-design',
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    subtitle: 'Nature, Designed',
    description:
      'Our landscape architects craft outdoor environments that harmonize with nature — lush gardens, water features, and outdoor living spaces.',
    image: '/8.jpeg',
    href: '/landscaping',
  },
  {
    id: 'vastu-shastra',
    title: 'Vastu Shastra',
    subtitle: 'Ancient Wisdom',
    description:
      'We integrate Vastu principles into every design — aligning spaces with natural energy flows to promote harmony, prosperity, and well-being.',
    image: '/9.jpeg',
    href: '/vastu-shastra',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#f8f5f0] overflow-hidden">
      
      {/* Top Spacer */}
      <div className="w-full h-[80px] lg:h-[120px]"></div>

      {/* Watermark Text Background ("WHAT WE DO") - හරියටම 100% මැදට! */}
      <div className="absolute top-[100px] lg:top-[120px] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
        <h2 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black text-gray-200/50 uppercase tracking-tighter whitespace-nowrap leading-none">
          What We Do
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-12 relative z-10 flex flex-col items-center">

          {/* Header (Centered) */}
          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 uppercase tracking-widest">
              Services
            </h3>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d2b55] leading-snug">
              Expertise crafted <span className="text-[#B89947] italic font-light">for you.</span>
            </h4>
            <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-base lg:text-lg leading-[1.9] font-light text-center">
              Four pillars of design excellence — each service carefully developed to bring your vision to life with
              precision, creativity, and utmost care.
            </p>
          </div>

          {/* Cards Grid - Centered items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full max-w-6xl">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 lg:h-52 overflow-hidden shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d2b55]/10 to-[#0d2b55]/60" />
                  <div className="absolute bottom-4 w-full flex justify-center">
                    <span className="px-4 py-1.5 bg-[#B89947]/90 backdrop-blur-sm text-white text-[12px] tracking-wide uppercase font-bold rounded-full shadow-lg">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content (Centered text) */}
                <div className="p-6 lg:p-8 flex flex-col flex-1 items-center text-center">
                  <h3 className="text-[#0d2b55] font-bold text-[18px] mb-3 group-hover:text-[#B89947] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] lg:text-[15px] font-light leading-relaxed mb-6 flex-1 text-center">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    id={`service-link-${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-[14px] font-semibold text-[#0d2b55] hover:bg-[#0d2b55] hover:text-white hover:border-[#0d2b55] transition-all duration-300 group/btn"
                  >
                    See More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="w-full h-[100px] lg:h-[150px]"></div>

    </section>
  );
}
