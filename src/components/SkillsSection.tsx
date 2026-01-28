import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Globe, Award } from 'lucide-react';

const skills = [
  { name: 'Java', level: 75, category: 'Programming' },
  { name: 'Python', level: 70, category: 'Programming' },
  { name: 'HTML/CSS', level: 85, category: 'Web Development' },
  { name: 'JavaScript', level: 70, category: 'Web Development' },
  { name: 'AI & ML', level: 65, category: 'Technologies' },
  { name: 'ServiceNow', level: 75, category: 'Technologies' },
];

const certifications = [
  {
    title: 'Java Programming',
    issuer: 'CodeTantra',
    icon: Code,
  },
  {
    title: 'Introduction to AI',
    issuer: 'Infosys Springboard',
    icon: Brain,
  },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of programming languages, web technologies, and emerging tech skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Bars */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Technical Skills</h3>
            </div>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl cursor-pointer transition-colors hover:bg-secondary"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Quick Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-primary-foreground"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">B.Tech in Computer Science</p>
                  <p className="text-sm opacity-90">Ravindra College of Engineering • 80.5% • 2026</p>
                </div>
                <div>
                  <p className="font-semibold">Intermediate</p>
                  <p className="text-sm opacity-90">Sri Nandi Junior College • 91.2% • 2022</p>
                </div>
                <div>
                  <p className="font-semibold">SSC</p>
                  <p className="text-sm opacity-90">Z. P. Girls High School • 96% • 2020</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
