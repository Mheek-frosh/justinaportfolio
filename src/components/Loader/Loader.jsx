import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background dark:bg-slate-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center w-32 h-32 mb-8"
          >
            <div className="absolute inset-0 border-t-4 border-r-4 border-primary rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-b-4 border-l-4 border-secondary rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
            <h1 className="text-4xl font-heading font-bold text-gradient">CJN</h1>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg font-body text-slate-600 dark:text-slate-300 tracking-widest uppercase"
          >
            Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
