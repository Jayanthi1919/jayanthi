import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Code, Palette, BookOpen, Music, Camera, Coffee } from 'lucide-react';

const galleryItems = [
  {
    title: 'Coding',
    description: 'Building solutions through code',
    icon: Code,
    gradient: 'from-primary to-accent',
  },
  {
    title: 'Learning',
    description: 'Continuous growth and education',
    icon: BookOpen,
    gradient: 'from-accent to-primary',
  },
  {
    title: 'Technology',
    description: 'Exploring AI and emerging tech',
    icon: Palette,
    gradient: 'from-primary/80 to-accent/80',
  },
  {
    title: 'Music',
    description: 'Finding inspiration in melodies',
    icon: Music,
    gradient: 'from-accent/80 to-primary/80',
  },
  {
    title: 'Photography',
    description: 'Capturing beautiful moments',
    icon: Camera,
    gradient: 'from-primary to-primary/60',
  },
  {
    title: 'Coffee & Code',
    description: 'Perfect productivity combo',
    icon: Coffee,
    gradient: 'from-accent/60 to-accent',
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gradient">Hobbies & Interests</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond coding - things that inspire and motivate me
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedItem(item)}
              className={`relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="relative p-6 md:p-8 h-full min-h-[200px] flex flex-col justify-end text-primary-foreground">
                <motion.div
                  className="absolute top-6 right-6 opacity-30"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <item.icon size={60} />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-3xl p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedItem.gradient} flex items-center justify-center mb-6`}>
                <selectedItem.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">{selectedItem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedItem.description}. This represents one of my key interests that helps me maintain a balanced and creative approach to both life and work.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
