import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

function ContactSection() {
  return (
    <div id="contact" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* App-like Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-none uppercase tracking-tighter mb-4">
            Let's <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent underline decoration-orange-500/10">Connect</span>.
          </h2>
          <p className="text-sm md:text-xl text-gray-400 font-bold uppercase tracking-[0.2em]">Available for Collaboration</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50/80 backdrop-blur-xl border border-gray-100 p-8 rounded-[2rem] shadow-sm">
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed font-medium mb-10">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out using the form or my social profiles!
              </p>

              <div className="space-y-4">
                <Link href={`mailto:${personalData.email}`} className="flex items-center gap-4 group p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-orange-500 active:scale-95">
                  <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                    <MdAlternateEmail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Contact</p>
                    <p className="text-sm md:text-base font-black text-gray-900 break-all">{personalData.email}</p>
                  </div>
                </Link>

                <Link href={personalData.linkedIn} target="_blank" className="flex items-center gap-4 group p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:border-blue-500 active:scale-95">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <BiLogoLinkedin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Social</p>
                    <p className="text-sm md:text-base font-black text-gray-900 underline decoration-blue-500/20 underline-offset-4 decoration-2">LinkedIn Profile</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-50 ring-1 ring-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;