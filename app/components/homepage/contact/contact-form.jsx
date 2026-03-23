"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const apiUrl = "/api/contact";

      const res = await axios.post(apiUrl, userInput);

      toast.success(res.data.message || "Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="w-full">
      <div className="bg-transparent">
        <form className="flex flex-col gap-5">
          <div className="space-y-1.5 flex flex-col">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
            <input
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all duration-300 px-5 py-4 text-gray-900 font-bold placeholder:font-medium placeholder:text-gray-300"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
              placeholder="Full Name"
            />
          </div>

          <div className="space-y-1.5 flex flex-col">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Email</label>
            <input
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all duration-300 px-5 py-4 text-gray-900 font-bold placeholder:font-medium placeholder:text-gray-300"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
              placeholder="email@example.com"
            />
            {error.email && <p className="text-[10px] font-bold text-red-500 ml-1 uppercase">Invalid Email Format</p>}
          </div>

          <div className="space-y-1.5 flex flex-col">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
            <textarea
              className="w-full bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all duration-300 px-5 py-4 text-gray-900 font-bold placeholder:font-medium placeholder:text-gray-300 resize-none"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
              placeholder="How can I help you?"
            />
          </div>

          <div className="pt-2">
            {error.required && <p className="text-[10px] font-bold text-red-500 mb-3 ml-1 uppercase">
              All active fields are required
            </p>}
            <button
              className="w-full bg-gray-900 hover:bg-orange-600 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                  <span className="animate-pulse">Sending...</span> :
                  <>
                    <span>Send Message</span>
                    <TbMailForward size={22} />
                  </>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;