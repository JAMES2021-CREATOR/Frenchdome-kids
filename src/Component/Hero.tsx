import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🇫🇷 Learn French From Beginner to Fluent
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Master
              <span className="text-blue-600"> French </span>
              With Confidence.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
              French Dome helps you learn French step by step through
              interactive lessons, vocabulary, grammar, pronunciation,
              AI-powered translation, and daily practice.
            </p>

            {/* Buttons */}
            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {/* Get Started */}
              <a
                href="#courses"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105"
              >
                Get Started
                <ArrowRight size={20} />
              </a>

              {/* Watch Demo */}
              <a
                href="#about"
                className="flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:scale-105"
              >
                <PlayCircle size={20} />
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <a
                href="#courses"
                className="group rounded-xl p-4 transition hover:bg-white hover:shadow-lg"
              >
                <h2 className="text-3xl font-bold text-blue-600 group-hover:text-blue-700">
                  500+
                </h2>
                <p className="text-sm text-slate-500">Lessons</p>
              </a>

              <a
                href="#testimonials"
                className="group rounded-xl p-4 transition hover:bg-white hover:shadow-lg"
              >
                <h2 className="text-3xl font-bold text-blue-600 group-hover:text-blue-700">
                  10K+
                </h2>
                <p className="text-sm text-slate-500">Students</p>
              </a>

              <a
                href="#translator"
                className="group rounded-xl p-4 transition hover:bg-white hover:shadow-lg"
              >
                <h2 className="text-3xl font-bold text-blue-600 group-hover:text-blue-700">
                  24/7
                </h2>
                <p className="text-sm text-slate-500">AI Tutor</p>
              </a>
            </div>

            {/* Close Left Content */}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
                alt="French learning"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <a
              href="#courses"
              className="absolute -bottom-8 left-6 rounded-2xl bg-white p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3">
                  <BookOpen className="text-blue-600" size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    Beginner Friendly
                  </h3>
                  <p className="text-sm text-slate-500">
                    Learn from A1 to Advanced
                  </p>
                </div>
              </div>
            </a>

            {/* Decorative Circle */}
            <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-blue-200 blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
