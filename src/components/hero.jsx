import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-cyan-400 font-mono mb-3">
                        Hi, my name is
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
                        {personalInfo.name}
                    </h1>

                    <h2 className="text-3xl md:text-4xl text-gray-400 mb-6">
                        {personalInfo.role}
                    </h2>

                    <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
                        {personalInfo.bio}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a
                            href="https://github.com/Sharik252"
                            className="bg-cyan-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all hover:scale-105"
                        >
                            View Projects
                        </a>

                        <a
                            href={personalInfo.resumeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-slate-900 transition-all flex items-center gap-2"
                        >
                            <FaDownload /> Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side - Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative">

                        {/* Gradient Circle */}
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-1">

                            {/* Profile Image */}
                            <img
                                src="/my photo.jpeg"
                                alt={personalInfo.name}
                                 className="w-full h-full rounded-full object-cover object-[center_33%]"
                            />

                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-2xl"
            >
                ↓
            </motion.div>
        </section>
    );
}