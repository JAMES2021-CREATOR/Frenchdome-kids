import {
  Volume2,
  ArrowRight,
  BookOpen,
  Search,
} from "lucide-react";

interface VocabularyWord {
  id: number;
  french: string;
  english: string;
  pronunciation: string;
  category: string;
}

const vocabulary: VocabularyWord[] = [
  {
    id: 1,
    french: "Bonjour",
    english: "Hello",
    pronunciation: "bon-zhoor",
    category: "Greeting",
  },
  {
    id: 2,
    french: "Merci",
    english: "Thank You",
    pronunciation: "mehr-see",
    category: "Common",
  },
  {
    id: 3,
    french: "Au revoir",
    english: "Goodbye",
    pronunciation: "oh ruh-vwar",
    category: "Greeting",
  },
  {
    id: 4,
    french: "Comment ça va ?",
    english: "How are you?",
    pronunciation: "koh-mahn sah vah",
    category: "Conversation",
  },
  {
    id: 5,
    french: "Oui",
    english: "Yes",
    pronunciation: "wee",
    category: "Basic",
  },
  {
    id: 6,
    french: "Non",
    english: "No",
    pronunciation: "noh",
    category: "Basic",
  },
];

const Vocabulary = () => {
  return (
    <section
      id="vocabulary"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Vocabulary Builder
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Learn New
            <span className="text-blue-600"> French Words</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Build your vocabulary by learning the most common French
            words and expressions used in everyday conversations.
          </p>
        </div>

        {/* Search */}

        <div className="mx-auto mt-12 max-w-xl">
          <div className="flex items-center rounded-2xl border bg-white px-5 py-4 shadow-sm">
            <Search className="text-slate-400" />

            <input
              type="text"
              placeholder="Search vocabulary..."
              className="ml-3 w-full outline-none"
            />
          </div>
        </div>

        {/* Vocabulary Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {vocabulary.map((word) => (
            <div
              key={word.id}
              className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                {word.category}
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                {word.french}
              </h3>

              <p className="mt-3 text-lg text-slate-600">
                {word.english}
              </p>

              <p className="mt-2 text-sm text-slate-500 italic">
                {word.pronunciation}
              </p>

              <div className="mt-8 flex gap-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  <Volume2 size={18} />
                  Pronounce
                </button>

                <a
                  href="#practice"
                  className="flex items-center justify-center rounded-xl border px-5 transition hover:bg-slate-100"
                >
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-8 py-12 text-center text-white">
          <BookOpen className="mx-auto" size={50} />

          <h3 className="mt-6 text-3xl font-bold">
            Ready to Practice?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Strengthen your vocabulary with interactive quizzes,
            pronunciation exercises, and AI-powered learning.
          </p>

          <a
            href="#practice"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Start Practice
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vocabulary;