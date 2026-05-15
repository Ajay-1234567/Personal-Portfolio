import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoLinkedin, BiLogoBehance } from "react-icons/bi";
import Link from "next/link";

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Let&apos;s Connect</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to build <span className="text-gradient">something great?</span>
          </h3>
          <p className="text-gray-400 mt-4 font-medium max-w-xl mx-auto">
            Let&apos;s create impactful digital experiences together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-morphism-dark border-white/10 p-8 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <p className="text-gray-300 text-base leading-relaxed font-light mb-10">
                I&apos;m currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <Link href={`mailto:${personalData.email}`} className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/5 transition-all hover:border-white/20 active:scale-95">
                  <div className="w-12 h-12 bg-white/5 text-gray-300 rounded-xl flex items-center justify-center shrink-0 group-hover:text-white transition-colors">
                    <MdAlternateEmail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{personalData.email}</p>
                  </div>
                </Link>

                <Link href={personalData.linkedIn} target="_blank" className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/5 transition-all hover:border-blue-500/50 active:scale-95">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:text-blue-300 transition-colors">
                    <BiLogoLinkedin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Professional</p>
                    <p className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">LinkedIn Profile</p>
                  </div>
                </Link>

                <Link href="https://www.behance.net/gajyakumar" target="_blank" className="flex items-center gap-4 group p-4 bg-white/5 rounded-2xl border border-white/5 transition-all hover:border-indigo-500/50 active:scale-95">
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center shrink-0 group-hover:text-indigo-300 transition-colors">
                    <BiLogoBehance size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Portfolio</p>
                    <p className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">Behance Profile</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 glass-morphism-dark border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
             {/* subtle corner highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px]" />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;