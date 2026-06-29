import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">My Journey</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">
            Professional <span className="text-gradient">Experience</span>
          </h3>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon */}
              <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center transform -translate-x-1/2 mt-1 z-10 text-white shadow-lg shadow-primary/30">
                <exp.icon size={20} />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} flex flex-col w-full`}>
                <div className="glass-card p-6 md:p-8 rounded-2xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-l-primary">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {exp.date}
                  </span>
                  <h4 className="text-2xl font-heading font-bold text-slate-800 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  <h5 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">
                    {exp.company}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-300 font-body text-sm mb-4 italic">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 mr-2 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
