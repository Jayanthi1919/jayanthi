import { motion } from 'framer-motion';
import { MapPin, Code, Heart } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const quickFacts = [
  { icon: MapPin, text: 'Nandikotkur, India' },
  { icon: Code, text: 'B.Tech CSE Student' },
  { icon: Heart, text: 'AI & Web Dev Enthusiast' },
];

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Floating Background Shapes */}
      <FloatingShape className="w-72 h-72 bg-primary top-20 -left-20" delay={0} />
      <FloatingShape className="w-48 h-48 bg-accent bottom-40 right-10" delay={1} />
      <FloatingShape className="w-36 h-36 bg-primary top-1/3 right-1/4" delay={2} />
      <FloatingShape className="w-24 h-24 bg-accent top-1/2 left-1/4" delay={1.5} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden card-shadow border-4 border-card">
              <img
                src={profilePhoto}
                alt="Boya Jayanthi"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center card-shadow"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-3xl">👋</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-2"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4"
            >
              <span className="text-gradient">Boya Jayanthi</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              Aspiring Software Developer & AI Enthusiast
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-foreground/80 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A passionate Computer Science student with a keen interest in Artificial Intelligence, 
              Machine Learning, and Web Development. Eager to leverage my skills to contribute 
              to innovative solutions and organizational growth.
            </motion.p>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full card-shadow"
                >
                  <fact.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{fact.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
