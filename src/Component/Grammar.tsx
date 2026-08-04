import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  PenTool,
} from "lucide-react";

interface GrammarTopic {
  id: number;
  title: string;
  level: string;
  description: string;
}

const grammarTopics: GrammarTopic[] = [
  {
    id: 1,
    title: "French Alphabet",
    level: "Beginner",
    description:
      "Learn the French alphabet, pronunciation, and special characters.",
  },
  {
    id: 2,
    title: "Articles & Gender",
    level: "Beginner",
    description:
      "Understand masculine, feminine, and plural nouns with articles.",
  },
  {
    id: 3,
    title: "Present Tense",
    level: "Intermediate",
    description:
      "Learn how to conjugate regular and irregular French verbs.",
  },
  {
    id: 4,
    title: "Sentence Structure",
    level: "Intermediate",
    description:
      "Build correct French sentences using proper grammar rules.",
  },
  {
    id: 5,
    title: "Past & Future Tenses",
    level: "Advanced",
    description:
      "Master French past, present, and future verb conjugations.",
  },
  {
    id: 6,
    title: "Complex Grammar",
    level: "Advanced",
    description:
      "Learn advanced grammar used by fluent French speakers.",
  },
];

const Grammar = () => {
  return (
    <section
      id="grammar"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            French Grammar
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Build Strong
            <span className="text-blue-600">
              {" "}Grammar Skills
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Learn French grammar step by step with simple explanations,
            examples, and practical exercises.
          </p>
        </div>

        {/* Grammar Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {grammarTopics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-3xl border bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <BookOpen className="text-blue-600" size={40} />

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                  {topic.level}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {topic.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {topic.description}
              </p>

              <a
                href="#practice"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Study Topic
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Features */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-blue-50 p-8 text-center">
            <CheckCircle
              className="mx-auto text-blue-600"
              size={40}
            />

            <h3 className="mt-5 text-xl font-bold">
              Easy Lessons
            </h3>

            <p className="mt-3 text-slate-600">
              Learn grammar with clear explanations and examples.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-8 text-center">
            <PenTool
              className="mx-auto text-blue-600"
              size={40}
            />

            <h3 className="mt-5 text-xl font-bold">
              Practice Exercises
            </h3>

            <p className="mt-3 text-slate-600">
              Reinforce every lesson with quizzes and exercises.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-8 text-center">
            <BookOpen
              className="mx-auto text-blue-600"
              size={40}
            />

            <h3 className="mt-5 text-xl font-bold">
              Real Examples
            </h3>

            <p className="mt-3 text-slate-600">
              Understand grammar through practical conversations.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-8 py-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Master French Grammar
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Improve your grammar skills with structured lessons,
            interactive quizzes, and AI-powered guidance.
          </p>

          <a
            href="#translator"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Continue Learning
            <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Grammar;