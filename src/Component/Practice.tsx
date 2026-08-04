import {
  BookOpen,
  Languages,
  Mic,
  PenSquare,
  Trophy,
  ArrowRight,
} from "lucide-react";

const Practice = () => {
  return (
    <section
      id="practice"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Practice Zone
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Practice Makes
            <span className="text-blue-600"> Perfect</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Improve your French by practicing vocabulary, grammar,
            pronunciation, and quizzes every day.
          </p>

        </div>

        {/* Practice Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Vocabulary */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <BookOpen className="text-blue-600" size={45} />

            <h3 className="mt-5 text-2xl font-bold">
              Vocabulary
            </h3>

            <p className="mt-4 text-slate-600">
              Practice new French words and improve your memory.
            </p>

            <a
              href="#vocabulary"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Practice Now
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Grammar */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <PenSquare className="text-blue-600" size={45} />

            <h3 className="mt-5 text-2xl font-bold">
              Grammar
            </h3>

            <p className="mt-4 text-slate-600">
              Test your understanding of French grammar.
            </p>

            <a
              href="#grammar"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Practice
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Speaking */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <Mic className="text-blue-600" size={45} />

            <h3 className="mt-5 text-2xl font-bold">
              Speaking
            </h3>

            <p className="mt-4 text-slate-600">
              Practice pronunciation and improve your speaking.
            </p>

            <a
              href="#translator"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Speak Now
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Quiz */}

          <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

            <Trophy className="text-blue-600" size={45} />

            <h3 className="mt-5 text-2xl font-bold">
              Quiz
            </h3>

            <p className="mt-4 text-slate-600">
              Challenge yourself with interactive French quizzes.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Quiz
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-10 py-14 text-center text-white">

          <Languages
            className="mx-auto"
            size={55}
          />

          <h3 className="mt-6 text-4xl font-bold">
            Practice Every Day
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100 text-lg">
            Daily practice is the fastest way to become fluent in French.
            Complete lessons, take quizzes, and track your progress.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="#courses"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              View Courses
            </a>

            <a
              href="#translator"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
            >
              AI Translator
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Practice;