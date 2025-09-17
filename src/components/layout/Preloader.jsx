import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const creditText = ["Created", "by", "Jiewen", "Huang", "'26"];
const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5, 
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onLoaded) {
            onLoaded();
          }
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onLoaded]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[10000]"
    >
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                    className="stroke-current text-gray-700"
                    strokeWidth="4" cx="50" cy="50" r="40" fill="transparent"
                ></circle>
                <motion.circle
                    className="stroke-current gradient-text-stroke"
                    strokeWidth="4" cx="50" cy="50" r="40" fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
                    transform="rotate(-90 50 50)"
                    style={{ strokeLinecap: 'round' }}
                ></motion.circle>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                {Math.floor(progress)}%
            </span>
        </div>
        <p className="mt-4 text-lg text-gray-300">Loading Assets...</p>
      </div>
      <motion.div
        className="absolute bottom-8 flex gap-2 text-sm text-slate-400 font-mono"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
      >
        {creditText.map((word, index) => (
          <motion.span key={index} variants={childVariants} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Preloader;