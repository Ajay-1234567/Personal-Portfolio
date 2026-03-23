import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";

function ContactSection() {
  return (
    <div id="contact" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-gray-50/50 border border-gray-100 p-5 md:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">

            {/* Contact Text */}
            <div className="space-y-6 md:space-y-10 text-center lg:text-left py-4 md:py-8">
              <div>
                <h2 className="text-[2.5rem] md:text-6xl font-black text-gray-900 leading-[1.1] mb-4 uppercase tracking-tighter">
                  Let's <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent underline decoration-orange-500/20">Connect</span>.
                </h2>
                <p className="text-sm md:text-xl text-gray-500 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                  I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start pt-2">
                <Link href={`mailto:${personalData.email}`} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm transition-all group-hover:bg-orange-500 shrink-0">
                    <MdAlternateEmail className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">Contact</p>
                    <p className="text-sm md:text-lg font-black text-gray-900 break-all leading-none">{personalData.email}</p>
                  </div>
                </Link>
                <Link href={personalData.linkedIn} target="_blank" className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm transition-all group-hover:bg-orange-500 shrink-0">
                    <BiLogoLinkedin className="text-orange-500 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">LinkedIn</p>
                    <p className="text-sm md:text-lg font-black text-gray-900 leading-none underline decoration-orange-500/20 decoration-2">Connect Profile</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[1.8rem] p-5 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 ring-1 ring-gray-50">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;