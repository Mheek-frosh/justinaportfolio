const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center relative z-10">
      <div className="container mx-auto px-6">
        <a href="#home" className="text-2xl font-heading font-bold text-gradient inline-block mb-4">
          CJN.
        </a>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-body">
          Designed with ❤️ for Chidinma Justina Nwosu
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
