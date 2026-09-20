import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400">
            Have something to discuss? Reach out to me using the methods below.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-gray-400 text-sm break-all">
              {personalInfo.email}
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${personalInfo.phone}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl mb-4">
              <FaPhone />
            </div>
            <h3 className="text-white font-bold mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">{personalInfo.phone}</p>
          </motion.a>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-gray-400 text-sm">{personalInfo.location}</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}