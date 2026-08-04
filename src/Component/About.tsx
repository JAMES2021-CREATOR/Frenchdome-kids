import {
  BookOpen,
  Globe,
  GraduationCap,
  Languages,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About French Dome
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Learn French the
              <span className="text-blue-600"> Smart Way</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              French Dome is an interactive online learning platform designed
              to help beginners and intermediate learners speak, read, write,
              and understand French with confidence.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Through structured lessons, vocabulary practice, grammar
              explanations, pronunciation guides, AI-powered translation, and
              real-life conversations, learning French becomes simple,
              enjoyable, and effective.
            </p>

            <a
              href="#courses"
              className="inline-flex mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Courses
            </a>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-blue-50 p-6 shadow-sm transition hover:shadow-lg">
              <BookOpen className="text-blue-600" size={40} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Interactive Lessons
              </h3>
              <p className="mt-2 text-slate-600">
                Easy-to-follow lessons from beginner to advanced level.
              </p>
            </div>

            <div className="rounded-2xl bg-white border p-6 shadow-sm transition hover:shadow-lg">
              <Languages className="text-blue-600" size={40} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Vocabulary Builder
              </h3>
              <p className="mt-2 text-slate-600">
                Learn thousands of useful French words and expressions.
              </p>
            </div>

            <div className="rounded-2xl bg-white border p-6 shadow-sm transition hover:shadow-lg">
              <Globe className="text-blue-600" size={40} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                AI Translator
              </h3>
              <p className="mt-2 text-slate-600">
                Translate English to French and French to English instantly.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6 shadow-sm transition hover:shadow-lg">
              <GraduationCap className="text-blue-600" size={40} />
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Practice Daily
              </h3>
              <p className="mt-2 text-slate-600">
                Improve your speaking, listening, and writing every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;