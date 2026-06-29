import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Scissors, 
  Headphones, 
  PenTool, 
  Palette, 
  LayoutTemplate, 
  Laptop, 
  Building2, 
  CalendarCheck, 
  FileText, 
  Boxes
} from 'lucide-react';

const servicesData = [
  { id: 1, title: "Administrative Assistance", description: "Providing comprehensive support to executives, managing schedules, and organizing daily operations.", Icon: Briefcase },
  { id: 2, title: "Salon Management", description: "Overseeing daily salon activities, staff management, and ensuring a premium customer experience.", Icon: Scissors },
  { id: 3, title: "Customer Service", description: "Delivering exceptional support, resolving issues efficiently, and building strong client relationships.", Icon: Headphones },
  { id: 4, title: "Graphic Design", description: "Creating visually appealing designs for marketing, social media, and brand communication.", Icon: PenTool },
  { id: 5, title: "Brand Identity", description: "Developing cohesive visual identities that resonate with your target audience.", Icon: Palette },
  { id: 6, title: "UI Design", description: "Designing intuitive and engaging user interfaces for web and mobile applications using Figma.", Icon: LayoutTemplate },
  { id: 7, title: "Virtual Assistance", description: "Offering remote administrative support, email management, and document preparation.", Icon: Laptop },
  { id: 8, title: "Office Administration", description: "Streamlining office processes, maintaining records, and ensuring smooth internal communications.", Icon: Building2 },
  { id: 9, title: "Scheduling", description: "Efficiently managing calendars, booking appointments, and coordinating events.", Icon: CalendarCheck },
  { id: 10, title: "Documentation", description: "Preparing, editing, and managing professional documents, reports, and presentations.", Icon: FileText },
  { id: 11, title: "Inventory Management", description: "Tracking supplies, placing orders, and maintaining optimal stock levels for business operations.", Icon: Boxes },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
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
          {servicesData.map((service, index) => {
            const IconComp = service.Icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                  <IconComp size={28} />
                </div>
                <h4 className="text-xl font-heading font-bold text-slate-800 dark:text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
