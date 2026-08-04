import {
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
                🇫🇷
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  French Dome
                </h2>

                <p className="text-sm text-slate-400">
                  Learn • Practice • Speak
                </p>
              </div>
            </a>

            <p className="mt-6 leading-8 text-slate-400">
              Learn French from beginner to advanced with
              interactive lessons, AI-powered tools,
              vocabulary practice, grammar, quizzes,
              and pronunciation exercises.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#courses" className="hover:text-blue-400">Courses</a></li>
              <li><a href="#translator" className="hover:text-blue-400">Translator</a></li>
              <li><a href="#practice" className="hover:text-blue-400">Practice</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>

            </ul>

          </div>

          {/* Learning */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Learning
            </h3>

            <ul className="space-y-4">

              <li><a href="#vocabulary" className="hover:text-blue-400">Vocabulary</a></li>
              <li><a href="#grammar" className="hover:text-blue-400">Grammar</a></li>
              <li><a href="#courses" className="hover:text-blue-400">Lessons</a></li>
              <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#login" className="hover:text-blue-400">Login</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Mail className="text-blue-500" />
                <span className="text-slate-400">
                  support@frenchdome.com
                </span>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-500" />
                <span className="text-slate-400">
                  +234 800 000 0000
                </span>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-blue-500" />
                <span className="text-slate-400">
                  Ilorin, Kwara State, Nigeria
                </span>
              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-10">

              <h4 className="mb-3 font-semibold">
                Newsletter
              </h4>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-xl px-4 py-3 text-black outline-none"
                />

                <button className="rounded-r-xl bg-blue-600 px-6 font-semibold hover:bg-blue-700">
                  Join
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-400 text-center">
            © 2026 French Dome. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>

          </div>

          <a
            href="#home"
            className="rounded-full bg-blue-600 p-3 transition hover:bg-blue-700"
          >
            <ChevronUp />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;