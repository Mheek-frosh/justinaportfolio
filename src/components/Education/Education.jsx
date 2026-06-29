import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "B.Sc. Mass Communication (In View)",
    institution: "National Open University of Nigeria, Abuja"
  },
  {
    degree: "National Diploma (ND), Mass Communication",
    institution: "Dorben Polytechnic, Abuja"
  },
  {
    degree: "Senior Secondary School Certificate (NECO)",
    institution: "Redemption High School, Nasarawa State"
  },
  {
    degree: "First School Leaving Certificate",
    institution: "Golf Course Primary School, Aba, Abia State"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-emerald-400">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-8 rounded-full mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-emerald-400">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
