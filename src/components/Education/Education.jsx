import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-800/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Academic Background</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">
            Education <span className="text-gradient">Journey</span>
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent transform md:-translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-4 border-primary flex items-center justify-center transform -translate-x-1/2 z-10 text-primary shadow-lg">
                <GraduationCap size={20} />
              </div>

              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right text-left'} w-full`}>
                <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {edu.date}
                  </span>
                  <h4 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <h5 className="text-lg font-medium text-primary mb-4">
                    {edu.school}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400 font-body">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
