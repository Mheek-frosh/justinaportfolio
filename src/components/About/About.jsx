import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Target, Lightbulb, Compass, Award } from 'lucide-react';

const pillars = [
  { Icon: Target, title: 'Mission', desc: 'To provide exceptional support and design solutions that drive business success.' },
  { Icon: Lightbulb, title: 'Vision', desc: 'To continually innovate and elevate the standards of professional services.' },
  { Icon: Compass, title: 'Objective', desc: 'To leverage my diverse skillset in a dynamic environment.' },
  { Icon: Award, title: 'Values', desc: 'Integrity, Creativity, Reliability, and Excellence.' },
];

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Commitment' },
  { value: 50, suffix: '+', label: 'Completed Projects' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 dark:text-white">
            Professional & <span className="text-gradient">Passionate</span>
          </h3>
        </motion.div>

        {/* Bio Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6 text-slate-600 dark:text-slate-300 font-body text-lg leading-relaxed"
          >
            <p>
              I am a versatile professional with extensive experience in administrative support, salon operations management, customer service, and graphic/UI design. My career is defined by a strong commitment to excellence, efficiency, and creative problem-solving.
            </p>
            <p>
              Whether I am organizing schedules, leading a team, resolving customer inquiries, or designing intuitive user interfaces, I bring a detail-oriented and strategic approach to every task.
            </p>
          </motion.div>

          {/* Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map((item, i) => {
              const IconComp = item.Icon;
              return (
                <div key={i} className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                  <IconComp className="w-8 h-8 text-primary mb-4 group-hover:text-secondary transition-colors" />
                  <h4 className="text-xl font-heading font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {inView && <CountUp end={stat.value} duration={2.5} />}
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
