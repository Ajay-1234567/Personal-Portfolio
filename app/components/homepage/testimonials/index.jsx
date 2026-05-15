"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Manager",
      text: "Ajay brings a unique blend of visual aesthetics and UX logic to the table. His work on our mobile app redesign significantly increased user engagement."
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      text: "Working with Ajay was seamless. He understood our complex requirements and translated them into clean, intuitive, and modern interfaces."
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      text: "An exceptional eye for detail. Ajay's understanding of design systems and components made the handoff to developers incredibly smooth."
    }
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Client <span className="text-gradient">Testimonials</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="glass-morphism-dark p-8 rounded-3xl border border-white/10 relative group hover:border-white/20 transition-all hover:-translate-y-2"
            >
              <FaQuoteLeft className="text-primary/30 text-4xl absolute top-6 right-6 group-hover:text-primary/50 transition-colors" />
              <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10 mt-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
