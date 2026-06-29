import { motion } from 'framer-motion';
import { Palette, Briefcase, Users, LayoutDashboard, Target, CalendarDays } from 'lucide-react';

const services = [
  {
    title: "Operations Management",
    description: "End-to-end management of business operations, staff supervision, scheduling, and workflow efficiency.",
    icon: <LayoutDashboard className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Graphic & UI/UX Design",
    description: "Designing engaging social media graphics, branding materials, logos, and UI/UX wireframes using Canva & Figma.",
    icon: <Palette className="w-8 h-8 text-pink-400" />
  },
  {
    title: "Administrative Support",
    description: "Expert calendar management, office administration, procurement, logistics, and confidential record keeping.",
    icon: <Briefcase className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Customer Service",
    description: "Professional client complaint resolution, maintaining high customer satisfaction and improving retention.",
    icon: <Users className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Financial Tracking",
    description: "Daily financial records maintenance, cash transaction processing, and stock control for businesses.",
    icon: <Target className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "Event & Appointment Coordination",
    description: "Organizing schedules, coordinating meetings, and handling daily business correspondences.",
    icon: <CalendarDays className="w-8 h-8 text-cyan-400" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Core <span className="text-blue-400">Competencies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-8 rounded-full mx-auto"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Providing top-tier operational, administrative, and design services to help businesses thrive.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 hover:bg-slate-800/60 transition-all group"
            >
              <div className="mb-6 p-4 bg-slate-950 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
