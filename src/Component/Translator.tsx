import {
  ArrowRightLeft,
  Languages,
  Volume2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { translateToFrench } from "../lib/translator";

const Translator = () => {
  const [english, setEnglish] = useState("");
  const [french, setFrench] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!english.trim()) {
      alert("Please enter some English text.");
      return;
    }

    try {
      setLoading(true);

      const result = await translateToFrench(english);

      setFrench(result);
    } catch (error) {
      console.error(error);
      alert("Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSwap = () => {
    const temp = english;
    setEnglish(french);
    setFrench(temp);
  };

  const handleExplain = () => {
    if (!french) {
      alert("Translate something first.");
      return;
    }

    alert(
      "AI Explanation feature will be connected after integrating OpenAI."
    );
  };

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
            {/* English */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  🇬🇧 English
                </h3>

                <button
                  type="button"
                  className="rounded-lg p-2 hover:bg-blue-100"
                >
                  <Volume2
                    className="text-blue-600"
                    size={20}
                  />
                </button>
              </div>

              <textarea
                rows={8}
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                placeholder="Type English text..."
                className="w-full rounded-2xl border p-5 outline-none transition focus:border-blue-600"
              />
            </div>

            {/* French */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">
                  🇫🇷 French
                </h3>

                <button
                  type="button"
                  className="rounded-lg p-2 hover:bg-blue-100"
                >
                  <Volume2
                    className="text-blue-600"
                    size={20}
                  />
                </button>
              </div>

              <textarea
                rows={8}
                value={french}
                readOnly
                placeholder="French translation appears here..."
                className="w-full rounded-2xl border p-5 bg-slate-50 outline-none"
              />
            </div>
          </div>

          {/* Action Buttons */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleTranslate}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
            >
              <Languages size={20} />

              {loading ? "Translating..." : "Translate"}
            </button>

            <button
              onClick={handleSwap}
              className="flex items-center gap-2 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              <ArrowRightLeft size={20} />
              Swap Languages
            </button>

            <button
              onClick={handleExplain}
              className="flex items-center gap-2 rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
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
              Translate English to French instantly using AI.
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
              Hear native pronunciation with one click.
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
              Understand grammar, sentence structure and usage.
            </p>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-8 py-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Ready to Practice Your French?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Use AI translation together with vocabulary, grammar,
            and quizzes to become fluent faster.
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