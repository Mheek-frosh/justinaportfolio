import { motion } from 'framer-motion';
import { servicesData } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">
            Professional <span className="text-gradient">Services</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-800 dark:text-white mb-3">
                {service.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
