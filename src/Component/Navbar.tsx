import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Courses", href: "#courses" },
  { title: "Vocabulary", href: "#vocabulary" },
  { title: "Grammar", href: "#grammar" },
  { title: "Translator", href: "#translator" },
  { title: "Practice", href: "#practice" },
  { title: "Testimonials", href: "#testimonials" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
      {/* Logo */}
<a href="#home" className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
    <Languages size={22} className="text-white" />
  </div>

  <div>
    <h1 className="text-2xl font-bold text-slate-900">
      French <span className="text-blue-600">Dome</span>
    </h1>
    <p className="text-xs text-slate-500">
      Learn • Practice • Speak
    </p>
  </div>
</a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="relative font-medium text-slate-700 transition hover:text-blue-600"
              >
                {item.title}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-xl border border-blue-600 px-5 py-2 font-semibold text-blue-600 transition hover:bg-blue-50">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="border-t bg-white lg:hidden"
          >
            <div className="space-y-2 px-6 py-6">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.title}
                </a>
              ))}

              <div className="mt-6 space-y-3">
                <button className="w-full rounded-xl border border-blue-600 py-3 font-semibold text-blue-600">
                  Login
                </button>

                <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;