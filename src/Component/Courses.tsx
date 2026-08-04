import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Languages,
  Star,
} from "lucide-react";

const courses = [
  {
    title: "Beginner (A1)",
    icon: <BookOpen size={40} />,
    description:
      "Start your French journey by learning greetings, numbers, alphabets, pronunciation, and basic conversations.",
    lessons: "30 Lessons",
    href: "#vocabulary",
  },
  {
    title: "Elementary (A2)",
    icon: <Languages size={40} />,
    description:
      "Build your vocabulary, improve grammar, and communicate in everyday situations with confidence.",
    lessons: "45 Lessons",
    href: "#grammar",
  },
  {
    title: "Intermediate (B1/B2)",
    icon: <GraduationCap size={40} />,
    description:
      "Master sentence construction, conversations, reading comprehension, and listening exercises.",
    lessons: "60 Lessons",
    href: "#practice",
  },
  {
    title: "Advanced (C1/C2)",
    icon: <Star size={40} />,
    description:
      "Achieve fluency with advanced grammar, pronunciation, writing, and real-life communication.",
    lessons: "80 Lessons",
    href: "#translator",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Courses
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Learn French
            <span className="text-blue-600"> Step by Step</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Whether you're just starting or aiming for fluency, French Dome
            provides structured courses designed to help you achieve your goals.
          </p>
        </div>

        {/* Course Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600">
                {course.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {course.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {course.description}
              </p>

              <div className="mt-6">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                  {course.lessons}
                </span>
              </div>

              <a
                href={course.href}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Start Learning
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Ready to Speak French?
          </h3>

          <p className="mt-4 text-lg text-slate-600">
            Join thousands of learners and begin your French journey today.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Enroll Now
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;