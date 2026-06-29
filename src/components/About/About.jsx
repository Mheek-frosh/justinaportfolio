import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Professional <span className="text-purple-400">Summary</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-8 rounded-full"></div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I am a highly organized and results-oriented administrative and operations professional with experience in salon management, executive support, customer service, business operations, and graphic design.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Adept at coordinating teams, managing schedules, maintaining records, handling finances, and improving workflow efficiency. I am creative and detail-oriented with proficiency in Canva and Figma for branding, marketing materials, and UI/UX concepts. Recognized for professionalism, leadership, excellent communication, and the ability to deliver quality service in fast-paced environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">7+</h4>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">5+</h4>
                <p className="text-slate-400">Roles Handled</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 aspect-square flex flex-col justify-end">
                <h4 className="font-bold text-xl mb-1">Operations</h4>
                <p className="text-sm text-slate-400">Team Leadership, Inventory, Workflow</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 aspect-square flex flex-col justify-end">
                <h4 className="font-bold text-xl mb-1">Administration</h4>
                <p className="text-sm text-slate-400">Executive Support, Scheduling, Records</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 aspect-square flex flex-col justify-end">
                <h4 className="font-bold text-xl mb-1">Graphic Design</h4>
                <p className="text-sm text-slate-400">Canva, Figma, Branding</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 aspect-square flex flex-col justify-end">
                <h4 className="font-bold text-xl mb-1">Customer Service</h4>
                <p className="text-sm text-slate-400">Complaint Resolution, Sales</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
