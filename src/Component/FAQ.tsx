import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Do I need any prior knowledge of French?",
    answer:
      "No. French Dome is designed for complete beginners and guides you step by step to advanced fluency.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. All lessons are self-paced, so you can study anytime and anywhere.",
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer:
      "Yes. Certificates will be available after successfully completing eligible courses and assessments.",
  },
  {
    question: "Can I practice speaking French?",
    answer:
      "Absolutely! Our pronunciation tools and speaking exercises help you improve your confidence and fluency.",
  },
  {
    question: "Does French Dome have an AI translator?",
    answer:
      "Yes. Our AI Translator helps translate between English and French while explaining grammar and vocabulary.",
  },
  {
    question: "Can I access French Dome on my phone?",
    answer:
      "Yes. French Dome is fully responsive and works perfectly on mobile phones, tablets, and desktops.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Got Questions?
            <span className="text-blue-600"> We've Got Answers</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Find answers to the most common questions about learning
            French with French Dome.
          </p>

        </div>

        {/* FAQ Cards */}

        <div className="mt-16 max-w-4xl mx-auto space-y-6">

          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-slate-900">
                {faq.question}

                <ChevronDown className="transition duration-300 group-open:rotate-180" />
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.answer}
              </p>

            </details>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-10 py-14 text-center text-white">

          <h3 className="text-4xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Our support team is always available to help you start your
            French learning journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="#contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Contact Us
            </a>

            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
            >
              Browse Courses
              <ArrowRight size={20} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;