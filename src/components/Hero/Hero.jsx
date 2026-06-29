import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-xs md:text-sm font-medium text-purple-300">Available for new opportunities</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Operations Professional <br className="hidden md:block" /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Graphic Designer</span>.
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm Chidinma Justina Nwosu, highly organized and results-oriented. Adept at coordinating teams, managing operations, and crafting visual identities.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 text-center bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-4 text-center bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
            >
              View Experience
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center order-1 md:order-2 mb-8 md:mb-0"
        >
          {/* Profile Image */}
          <div className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-2xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-3xl overflow-hidden relative shadow-2xl">
            <img 
              src="/image.png" 
              alt="Chidinma Justina Nwosu" 
              className="w-full h-full object-cover mix-blend-normal opacity-90"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
