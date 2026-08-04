import {
  Star,
  Quote,
  ArrowRight,
  Users,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  country: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "French Dome made learning French simple and enjoyable. The lessons are well structured and easy to follow.",
  },
  {
    id: 2,
    name: "Michael Smith",
    country: "Canada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The AI Translator and vocabulary practice helped me become more confident when speaking French.",
  },
  {
    id: 3,
    name: "Grace Williams",
    country: "Nigeria",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I started with zero knowledge of French. Now I can confidently introduce myself and hold simple conversations.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Student Reviews
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            What Our
            <span className="text-blue-600">
              {" "}Students Say
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Thousands of learners are improving their French with
            French Dome every day.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Quote
                className="text-blue-600"
                size={40}
              />

              <p className="mt-6 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-6 flex">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.country}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">

            <Users
              className="mx-auto text-blue-600"
              size={45}
            />

            <h3 className="mt-5 text-4xl font-bold text-blue-600">
              10K+
            </h3>

            <p className="mt-2 text-slate-600">
              Active Students
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">

            <Star
              className="mx-auto fill-yellow-400 text-yellow-400"
              size={45}
            />

            <h3 className="mt-5 text-4xl font-bold text-blue-600">
              4.9/5
            </h3>

            <p className="mt-2 text-slate-600">
              Average Rating
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-md">

            <Quote
              className="mx-auto text-blue-600"
              size={45}
            />

            <h3 className="mt-5 text-4xl font-bold text-blue-600">
              25K+
            </h3>

            <p className="mt-2 text-slate-600">
              Positive Reviews
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-blue-600 px-10 py-14 text-center text-white">

          <h3 className="text-4xl font-bold">
            Ready to Join Our Students?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Start learning French today and become part of our growing
            learning community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="#courses"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Start Learning
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600"
            >
              Contact Us
              <ArrowRight size={20} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;