import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Briefcase, Server, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Family Expenses Calculator',
    description: 'Developed a custom application on the ServiceNow platform to manage and calculate family expenses. The project centralizes expense tracking, categorizes spending, and generates monthly insights for better financial planning.',
    tech: ['ServiceNow', 'JavaScript', 'Data Analysis'],
    icon: Server,
    color: 'primary',
  },
];

const internships = [
  {
    title: 'Application Developer – Web & Mobile',
    company: 'Web Development Internship',
    description: 'Developed responsive and interactive web pages using core web technologies like HTML5, CSS3, and JavaScript for an enhanced user experience.',
    icon: Globe,
  },
  {
    title: 'ServiceNow Administration',
    company: 'Platform Administration',
    description: 'Assisted in configuring and administering ServiceNow platform, including user accounts, roles, and access controls. Customized forms, fields, and tables to meet specific business requirements.',
    icon: Server,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient">Projects & Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience through internships and personal projects
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -5 }}
              className="bg-card rounded-3xl p-8 md:p-12 card-shadow hover:card-hover-shadow transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <project.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-secondary text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Internships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-accent/10 rounded-xl">
              <Briefcase className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-serif font-semibold">Internship Experience</h3>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl">
                  <internship.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{internship.title}</h4>
                  <p className="text-primary text-sm mb-3">{internship.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{internship.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
