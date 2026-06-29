import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const whatsappNumber = '2348165988801';
    const text = `Hello Chidinma, my name is ${formState.name} (${formState.email}).\n\n${formState.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-8 rounded-full mx-auto"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to explore potential collaborations? Let's talk about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="p-3 bg-slate-950 rounded-lg text-emerald-400 shrink-0">
                <Mail />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href="mailto:chidinmanwosu380@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors">chidinmanwosu380@gmail.com</a>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="p-3 bg-slate-950 rounded-lg text-emerald-400 shrink-0">
                <Phone />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-slate-400">+234 816 598 8801</p>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="p-3 bg-slate-950 rounded-lg text-emerald-400 shrink-0">
                <MapPin />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-slate-400">FCT Abuja, Nigeria</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 bg-slate-900/40 p-8 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSuccess ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
