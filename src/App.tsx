import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Award, Briefcase, GraduationCap, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-24 animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Surya A</h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-blue-100">MERN Stack Developer</h2>
            <div className="flex flex-wrap gap-6 items-center text-sm">
              <a href="mailto:suryasatz30@gmail.com" 
                 className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Mail size={16} />
                suryasatz30@gmail.com
              </a>
              <a href="tel:6374142151" 
                 className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Phone size={16} />
                6374142151
              </a>
              <a href="#" 
                 className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Github size={16} />
                Github
              </a>
              <a href="#" 
                 className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Profile Summary */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <User className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-800">Profile Summary</h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
            <p className="text-gray-600 leading-relaxed text-lg">
              MERN Stack Developer | Fresher with expertise in MongoDB, Express.js, React.js, and Node.js, eager to develop 
              scalable web applications and APIs. Passionate about problem-solving, front-end optimization, and state 
              management. Seeking an opportunity to learn and grow in a dynamic tech environment.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-800">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">SRM Valliammai Engineering College, Kattankulathur</h3>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-blue-600 font-semibold">B.E Computer Science Engineering</p>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CGPA: 8.3/10</span>
              </div>
              <p className="text-gray-500">Nov 2022 – May 2026</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Shrine Vailankanni Senior Secondary School, T.Nagar, Chennai</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-600 font-semibold">12th Higher Secondary</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Percentage: 66%</span>
                    <span className="text-gray-500">Apr 2021 – May 2022</span>
                  </div>
                </div>
                <div>
                  <p className="text-blue-600 font-semibold">10th Senior Secondary</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Percentage: 75%</span>
                    <span className="text-gray-500">Apr 2019 – May 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Udemy Clone</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Developed a functional Udemy-inspired e-learning platform using React.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Built dynamic React components for course listings and user interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Designed a responsive UI to ensure a seamless experience across devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Deployed the application efficiently using Vercel for fast and reliable performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">Nostra - E-Commerce Website</h3>
                <div className="flex gap-2">
                  <a href="#" className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition-all flex items-center gap-1">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href="#" className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-all flex items-center gap-1">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Created a fully responsive and modern e-commerce website</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Tech Stack: HTML, Tailwind CSS, JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Designed an intuitive UI with smooth navigation and fast checkout</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Ensured scalability, allowing for future feature expansion</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">Greenden Landing Page</h3>
                <a href="#" className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-all flex items-center gap-1">
                  <Github size={16} /> Code
                </a>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Developed a clean and modern landing page with a nature-inspired theme</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Tech Stack: HTML, Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Ensured a fully responsive design for smooth viewing across all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Optimized performance using Tailwind CSS utility classes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Code className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-blue-100 text-blue-800">C</span>
                <span className="skill-tag bg-blue-100 text-blue-800">Java</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Front-end Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-purple-100 text-purple-800">HTML</span>
                <span className="skill-tag bg-purple-100 text-purple-800">CSS</span>
                <span className="skill-tag bg-purple-100 text-purple-800">Javascript</span>
                <span className="skill-tag bg-purple-100 text-purple-800">React</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-green-100 text-green-800">Node.js</span>
                <span className="skill-tag bg-green-100 text-green-800">Express.js</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Database</h3>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag bg-orange-100 text-orange-800">MongoDB</span>
                <span className="skill-tag bg-orange-100 text-orange-800">PostgreSQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-blue-600" size={24} />
            <h2 className="text-3xl font-bold text-gray-800">Achievements and Co-Curricular Activities</h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Certified in AI from Academor – Gained expertise in artificial intelligence concepts and applications</span>
              </li>
              <li className="flex items-start gap-3">
                <Award size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Completed Full Stack Web Development Course from EMC (May 2025) with hands-on experience in frontend and backend technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <Award size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">1st Place – TGKA State Karate Championship (Feb 2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <Award size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">1st Place – CDSKA Tournament (Mar 2024)</span>
              </li>
              <li className="flex items-start gap-3">
                <Award size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">2nd Place – International Goju-Ryu Karate Championship (Oct 2023)</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100">© 2024 Surya A. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;