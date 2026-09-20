import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function About() {
  const stats = [
    { label: 'Projects Built', value: '5+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Certifications', value: '5+' },
    { label: 'Dsa Questions', value: '50+' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 leading-relaxed space-y-4"
          >
            <p>
              Hello! I'm{' '}
              <span className="text-cyan-400 font-semibold">
                {personalInfo.name}
              </span>
              , a passionate {personalInfo.role} based in {personalInfo.location}.
            </p>
            <p>{personalInfo.bio}</p>
            <p>
              As a fresher, I've built multiple real-world projects to sharpen my
              skills. I love turning ideas into clean, functional, and
              user-friendly web applications.
            </p>
            <p>
              When I'm not coding, I explore new technologies, contribute to
              open-source, and read tech blogs. My goal is simple — write{' '}
              <span className="text-cyan-400">clean code</span> and build{' '}
              <span className="text-cyan-400">user-friendly</span> products.
            </p>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-cyan-500/30 p-6 rounded-xl text-center hover:border-cyan-400 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                  {item.value}
                </h3>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}