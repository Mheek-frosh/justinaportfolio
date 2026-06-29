import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-body font-medium text-slate-500 dark:text-slate-400 mb-4 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
              Chidinma Justina <br />
              <span className="text-gradient">Nwosu</span>
            </h1>
            
            <div className="h-16 md:h-20 mb-6 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  'Administrative Professional',
                  2000,
                  'Graphic Designer',
                  2000,
                  'Customer Service Expert',
                  2000,
                  'Salon Operations Manager',
                  2000,
                  'Executive Assistant',
                  2000
                ]}
                wrapper="span"
                speed={50}
                className="text-2xl md:text-4xl font-heading font-semibold text-slate-700 dark:text-slate-200"
                repeat={Infinity}
              />
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              Passionate about delivering exceptional administrative support, managing business operations efficiently, and creating beautiful digital experiences through design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-button font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto justify-center">
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download CV
              </a>
              <a href="#portfolio" className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-button font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 w-full sm:w-auto justify-center">
                View Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative max-w-md w-full mx-auto mt-10 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden glass-card p-3">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/src/assets/images/hero.png" 
                  alt="Chidinma Justina Nwosu" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 sm:-left-10 glass-card px-4 sm:px-6 py-3 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm whitespace-nowrap text-slate-800 dark:text-slate-100">Available for work</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 glass-card px-6 py-4 rounded-2xl flex flex-col items-center z-20"
            >
              <span className="text-2xl font-bold text-gradient">5+</span>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Years Exp</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
