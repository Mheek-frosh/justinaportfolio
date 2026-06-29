import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Salon Manager",
    company: "The Summa World Concept",
    period: "2025 - 2026",
    description: "Managed end-to-end salon operations, ensuring smooth daily service delivery and high customer satisfaction. Supervised staff schedules, handled cash and financial records, monitored inventory, and implemented upselling strategies."
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Designed social media graphics, flyers, posters, and marketing materials. Created UI/UX wireframes and interactive prototypes using Figma. Developed branding concepts including logos and visual identities."
  },
  {
    role: "Personal Assistant",
    company: "UT-PRON, Abuja",
    period: "2023 - 2025",
    description: "Managed calendars, appointments, meetings, and correspondence. Coordinated office administration, procurement, and logistics. Maintained confidential records and supported financial tracking."
  },
  {
    role: "Intern",
    company: "Wefem 106.9 FM, Abuja",
    period: "2022",
    description: "Supported production and administrative activities. Assisted with programme scheduling and managed social media engagement."
  },
  {
    role: "Operations Supervisor",
    company: "Dianna Pure Water Company",
    period: "2017 - 2019",
    description: "Supervised operational staff and monitored productivity. Handled customer service, complaint resolution, maintained financial records, and managed inventory levels."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Professional <span className="text-pink-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-16 rounded-full mx-auto"></div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex flex-col mb-2">
                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  </div>
                  <div className="text-purple-400 font-medium mb-4">{exp.company} <span className="text-slate-500">| {exp.period}</span></div>
                  <p className="text-slate-400 leading-relaxed text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
