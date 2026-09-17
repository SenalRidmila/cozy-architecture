import { Eye, Target, Heart, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: <Eye className="w-6 h-6 text-[#B89947]" />,
    title: 'Our Vision',
    desc: 'To be the most trusted architectural firm — creating spaces that elevate the human experience through thoughtful design and cultural sensitivity.',
  },
  {
    icon: <Target className="w-6 h-6 text-[#B89947]" />,
    title: 'Our Mission',
    desc: 'Delivering design excellence by blending modern innovation with timeless principles — ensuring every structure stands as a testament to quality.',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#B89947]" />,
    title: 'Our Values',
    desc: 'Integrity, creativity, sustainability, and client-centricity are the cornerstones of every project we undertake — from concept to completion.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">

      {/* Top Spacer */}
      <div className="w-full h-[80px] lg:h-[120px]"></div>

      {/* Watermark Text Background ("WHO WE ARE") - හරියටම 100% මැදට! w-full ඉවත් කර ඇත */}
      <div className="absolute top-[100px] lg:top-[120px] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
        <h2 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black text-gray-50 uppercase tracking-tighter whitespace-nowrap leading-none">
          Who We Are
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-12 relative z-10 flex flex-col items-center">

          {/* ප්‍රධාන මාතෘකාව */}
          <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 uppercase tracking-widest">
              About Us
            </h3>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d2b55] leading-snug">
              Designing the future of <span className="text-[#B89947] italic font-light">Sri Lanka.</span>
            </h4>
          </div>

          {/* අන්තර්ගතය - මැදට Align කර ඇත */}
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-base lg:text-lg leading-[1.9] mb-6 font-light text-center">
              At Cozy Architecture, we believe every structure tells a story. For over 15 years, we have been shaping skylines and transforming interiors across Sri Lanka — from elegant private residences to landmark commercial developments.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-[1.9] mb-10 font-light text-center">
              Our multidisciplinary team of architects, interior designers, and landscape artists work in harmony to create spaces that are not merely built — but felt. Grounded in the ancient wisdom of Vastu Shastra and elevated by contemporary design language, our work resonates with both soul and sophistication.
            </p>

            <div className="flex justify-center w-full mt-4">
              {/* Button එකේ padding නිවැරදි කර, min-w-[200px] මගින් හිරවීම වළක්වා ඇත */}
              <a href="#contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 min-w-[200px] bg-white border-2 border-[#0d2b55] text-[#0d2b55] font-bold rounded-full hover:bg-[#0d2b55] hover:text-white transition-all duration-300 group text-[15px] lg:text-base">
                Work With Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Vision, Mission, Values Cards - 3 Columns Centered */}
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-gray-100 shadow-sm p-8 rounded-xl flex flex-col items-center text-center hover:shadow-lg hover:border-[#B89947]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-[#0d2b55] transition-colors duration-300 mb-6">
                  <span className="group-hover:brightness-200 transition-all">{p.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-[#0d2b55] mb-4">{p.title}</h4>
                <p className="text-gray-500 leading-relaxed text-[15px] font-light text-center">
                  {p.desc}
                </p>
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