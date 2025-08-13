"use client";

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export default function Skills() {
  const frontendSkills: Skill[] = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Next.js", level: 85, color: "bg-black" },
    { name: "TypeScript", level: 80, color: "bg-blue-600" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Tailwind CSS", level: 85, color: "bg-sky-500" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 85, color: "bg-green-600" },
    { name: "Express", level: 80, color: "bg-gray-700" },
    { name: "MongoDB", level: 75, color: "bg-green-500" },
    { name: "PostgreSQL", level: 70, color: "bg-blue-700" },
    { name: "GraphQL", level: 65, color: "bg-pink-600" },
  ];

  const otherSkills: Skill[] = [
    { name: "Git", level: 90, color: "bg-red-500" },
    { name: "Docker", level: 75, color: "bg-blue-500" },
    { name: "CI/CD", level: 70, color: "bg-green-700" },
    { name: "AWS", level: 65, color: "bg-yellow-600" },
    { name: "Testing", level: 80, color: "bg-purple-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <motion.div 
                    className="w-full bg-gray-200 rounded-full h-2.5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">Backend</h3>
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <motion.div 
                    className="w-full bg-gray-200 rounded-full h-2.5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-center">DevOps & Tools</h3>
            <div className="space-y-5">
              {otherSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <motion.div 
                    className="w-full bg-gray-200 rounded-full h-2.5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className={`h-2.5 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
