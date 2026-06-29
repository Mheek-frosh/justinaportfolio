import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const traits = [
  "Professional & Reliable",
  "Creative Problem Solver",
  "Excellent Communicator",
  "Highly Organized",
  "Quick Learner",
  "Leadership Skills",
  "Customer Focused",
  "Detail Oriented"
];

const WhyHireMe = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Value Proposition</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white mb-6">
              Why You Should <span className="text-gradient">Hire Me</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-body leading-relaxed">
              I combine administrative efficiency with creative design thinking to deliver comprehensive solutions. My ability to manage complex operations while maintaining a keen eye for aesthetics makes me a unique asset to any team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{trait}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full flex justify-center items-center mt-10 lg:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite] p-4 md:p-8">
              <div className="w-full h-full rounded-full border border-secondary/40 border-dashed animate-[spin_15s_linear_infinite_reverse] p-4 md:p-8">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] animate-[spin_20s_linear_infinite_reverse]">
                  <div className="text-center">
                    <span className="block text-4xl md:text-6xl font-bold text-gradient mb-2">100%</span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">Dedication</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-slate-200 dark:border-slate-700 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
