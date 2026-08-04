import { ArrowRightLeft, Languages, Volume2, Sparkles } from "lucide-react";

const Translator = () => {
  return (
    <section
      id="translator"
      className="py-24 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            AI Translator
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Translate Between
            <span className="text-blue-600"> French & English</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Instantly translate words, sentences, or paragraphs while
            improving your French vocabulary and pronunciation.
          </p>
        </div>

        {/* Translator Card */}

        <div className="mt-16 rounded-3xl bg-white p-8 shadow-xl">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* French */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  🇫🇷 French
                </h3>

                <button className="rounded-lg p-2 transition hover:bg-blue-100">
                  <Volume2 className="text-blue-600" size={20} />
                </button>
              </div>

              <textarea
                rows={8}
                placeholder="Type French text..."
                className="w-full rounded-2xl border p-5 outline-none transition focus:border-blue-600"
              ></textarea>
            </div>

            {/* English */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  🇬🇧 English
                </h3>

                <button className="rounded-lg p-2 transition hover:bg-blue-100">
                  <Volume2 className="text-blue-600" size={20} />
                </button>
              </div>

              <textarea
                rows={8}
                placeholder="Translation appears here..."
                className="w-full rounded-2xl border p-5 outline-none transition focus:border-blue-600"
              ></textarea>
            </div>

          </div>

          {/* Action Buttons */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              <Languages size={20} />
              Translate
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
              <ArrowRightLeft size={20} />
              Swap Languages
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50">
              <Sparkles size={20} />
              AI Explain
            </button>

          </div>
        </div>

        {/* Features */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 text-center shadow-md">
            <Languages
              className="mx-auto text-blue-600"
              size={40}
            />

            <h3 className="mt-5 text-xl font-bold">
              Instant Translation
            </h3>

            <p className="mt-3 text-slate-600">
              Translate French to English and English to French in seconds.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-md">
            <Volume2
              className="mx-auto text-blue-600"
              size={40}
            />

            <h3 className="mt-5 text-xl font-bold">
              Pronunciation
            </h3>

            <p className="mt-3 text-slate-600">
              Listen to correct pronunciation with one click.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-md">
            <Sparkles
              className="mx-auto text-blue-600"
              size={40}
            />

            <h3 className="mt-5 text-xl font-bold">
              AI Explanation
            </h3>

            <p className="mt-3 text-slate-600">
              Get grammar explanations and usage examples powered by AI.
            </p>
          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-8 py-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Ready to Practice Your French?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Use AI translation together with vocabulary, grammar, and quizzes
            to become fluent faster.
          </p>

          <a
            href="#practice"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Go to Practice
          </a>

        </div>

      </div>
    </section>
  );
};

export default Translator;