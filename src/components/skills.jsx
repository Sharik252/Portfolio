import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
     { name: 'Java', level: 90 },
     { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 100 },
    { name: 'JavaScript', level: 85 },
     { name: 'TypeSceipt', level: 70 },
    { name: 'React', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
     { name: 'Bootstrap framework', level: 90 },
    { name: 'Node.js', level: 80 },
     { name: 'Express.js', level: 90 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Firebase', level: 75 },
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Vite', 'Postman', 'Figma',
    'Vercel', 'Netlify', 'npm', 'REST APIs'
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
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
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-200">{skill.name}</span>
                <span className="text-cyan-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Tools & <span className="text-cyan-400">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-slate-800 border border-cyan-500/30 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}