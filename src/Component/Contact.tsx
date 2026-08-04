import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            We'd Love to
            <span className="text-blue-600"> Hear From You</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Have questions about French Dome? Send us a message and we'll
            get back to you as soon as possible.
          </p>

        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Get In Touch
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Whether you're just getting started or you're already learning
              French, we're here to help you every step of the way.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-4">
                  <Mail className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-slate-600">
                    support@frenchdome.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-4">
                  <Phone className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-slate-600">
                    +234 800 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-4">
                  <MapPin className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-slate-600">
                    Ilorin, Kwara State, Nigeria
                  </p>
                </div>
              </div>

            </div>

            {/* Social Media */}

            <div className="mt-12">

              <h4 className="mb-5 text-xl font-bold">
                Follow Us
              </h4>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="rounded-xl bg-white p-4 shadow transition hover:bg-blue-600 hover:text-white"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="rounded-xl bg-white p-4 shadow transition hover:bg-blue-600 hover:text-white"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="rounded-xl bg-white p-4 shadow transition hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="rounded-xl bg-white p-4 shadow transition hover:bg-blue-600 hover:text-white"
                >
                  <FaGithub />
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <form className="space-y-6">

              <div>
                <label className="mb-2 block font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;    