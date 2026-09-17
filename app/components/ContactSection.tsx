'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const contactDetails = [
  { icon: <Phone className="w-5 h-5 text-[#B89947]" />, label: 'Phone', value: '+94 11 234 5678', href: 'tel:+94112345678' },
  { icon: <Mail className="w-5 h-5 text-[#B89947]" />, label: 'Email', value: 'hello@cozyarchitecture.lk', href: 'mailto:hello@cozyarchitecture.lk' },
  { icon: <MapPin className="w-5 h-5 text-[#B89947]" />, label: 'Address', value: '42 Bauddhaloka Mawatha, Colombo 07, Sri Lanka', href: 'https://maps.google.com' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#f8f5f0] overflow-hidden">

      {/* Top Spacer */}
      <div className="w-full h-[80px] lg:h-[120px]"></div>

      {/* Watermark Text Background ("CONTACT US") - හරියටම 100% මැදට! */}
      <div className="absolute top-[100px] lg:top-[120px] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
        <h2 className="text-[80px] sm:text-[100px] md:text-[140px] lg:text-[170px] font-black text-gray-200/50 uppercase tracking-tighter whitespace-nowrap leading-none">
          Contact Us
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-12 relative z-10 flex flex-col items-center">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 uppercase tracking-widest">
              Get In Touch
            </h3>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d2b55] leading-snug">
              Let&apos;s build something <span className="text-[#B89947] italic font-light">together.</span>
            </h4>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-base lg:text-lg leading-[1.9] font-light text-center">
              Whether you have a specific project in mind or just want to explore possibilities, 
              we&apos;d love to hear from you. Drop us a message below.
            </p>
          </div>

          <div className="max-w-4xl w-full mx-auto flex flex-col gap-10 lg:gap-14">

            {/* Contact Info (Top) */}
            <div className="flex flex-col gap-6 w-full">
              <div className="rounded-2xl bg-[#0d2b55] p-8 shadow-2xl relative overflow-hidden group text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B89947] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500" />
                <h3 className="text-white font-bold text-xl mb-2">Contact Information</h3>
                <p className="text-white/60 text-[15px] font-light mb-10">Reach out through any of these channels.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  {contactDetails.map((item) => (
                    <a key={item.label} href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noreferrer"
                      className="flex flex-col items-center gap-4 group/item">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#B89947] group-hover/item:border-[#B89947] transition-all duration-300 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-white text-[15px] leading-relaxed font-light group-hover/item:text-[#B89947] transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office hours */}
              <div className="rounded-2xl bg-white border border-gray-100 p-8 shadow-sm text-center">
                <h4 className="text-[#0d2b55] font-bold mb-5 text-[16px] tracking-wide uppercase">Office Hours</h4>
                <div className="flex flex-col sm:flex-row justify-center gap-8 text-[15px]">
                  <div className="flex flex-col items-center text-gray-500">
                    <span className="font-light">Monday – Friday</span>
                    <span className="font-semibold text-[#0d2b55]">8:30 AM – 5:30 PM</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-500">
                    <span className="font-light">Saturday</span>
                    <span className="font-semibold text-[#0d2b55]">9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex flex-col items-center text-gray-500">
                    <span className="font-light">Sunday</span>
                    <span className="font-semibold text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Bottom) */}
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12 border border-gray-50 flex flex-col items-center">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center min-h-[450px] text-center gap-5 animate-in fade-in zoom-in duration-500 w-full">
                    <div className="w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shadow-inner">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-[#0d2b55] text-3xl font-bold mt-2">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm text-base leading-relaxed font-light mx-auto text-center">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="mt-6 px-8 py-3 bg-transparent border-2 border-[#0d2b55] text-[#0d2b55] rounded-full text-[15px] font-bold hover:bg-[#0d2b55] hover:text-white transition-all cursor-pointer mx-auto block"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-6 w-full items-center">
                    <h3 className="text-[#0d2b55] font-bold text-xl mb-4 text-center">Send Us a Message</h3>

                    <div className="grid sm:grid-cols-2 gap-6 w-full">
                      <div className="flex flex-col items-center">
                        <label htmlFor="contact-name" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest text-center">Full Name *</label>
                        <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required
                          placeholder="John Silva"
                          className="w-full px-5 py-4 text-center rounded-xl border border-gray-200 text-gray-800 text-[15px] placeholder:text-gray-300 focus:outline-none focus:border-[#B89947] focus:ring-4 focus:ring-[#B89947]/10 transition-all bg-[#f8f5f0]/50 focus:bg-white"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <label htmlFor="contact-email" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest text-center">Email Address *</label>
                        <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 text-center rounded-xl border border-gray-200 text-gray-800 text-[15px] placeholder:text-gray-300 focus:outline-none focus:border-[#B89947] focus:ring-4 focus:ring-[#B89947]/10 transition-all bg-[#f8f5f0]/50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest text-center">Service Interested In</label>
                      <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange}
                        className="w-full px-5 py-4 text-center rounded-xl border border-gray-200 text-gray-700 text-[15px] focus:outline-none focus:border-[#B89947] focus:ring-4 focus:ring-[#B89947]/10 transition-all bg-[#f8f5f0]/50 focus:bg-white appearance-none cursor-pointer">
                        <option value="">Select a service...</option>
                        <option value="Architecture Design">Architecture Design</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="Vastu Shastra">Vastu Shastra</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div className="w-full flex flex-col items-center">
                      <label htmlFor="contact-message" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest text-center">Your Message *</label>
                      <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full px-5 py-4 text-center rounded-xl border border-gray-200 text-gray-800 text-[15px] placeholder:text-gray-300 focus:outline-none focus:border-[#B89947] focus:ring-4 focus:ring-[#B89947]/10 transition-all resize-none bg-[#f8f5f0]/50 focus:bg-white"
                      />
                    </div>

                    <button id="contact-submit" type="submit" disabled={loading}
                      className="mt-2 mx-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#0d2b55] text-white font-bold rounded-xl hover:bg-[#B89947] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-[15px] w-full sm:w-auto">
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                      ) : (
                        <><Send size={18} /> Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="w-full h-[100px] lg:h-[150px]"></div>

    </section>
  );
}
