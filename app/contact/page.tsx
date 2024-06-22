"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:behramiarton21@gmail.com?subject=${data.subject}&body=${data.message}`;
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center py-16 mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Contact Me
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              className="placeholder-gray-500 border border-gray-300 focus:outline-none p-3 rounded-lg w-full"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Please enter your full name
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-gray-800 font-semibold mb-2"
            >
              Subject
            </label>
            <input
              {...register("subject", { required: true })}
              id="subject"
              className="placeholder-gray-500 border border-gray-300 focus:outline-none p-3 rounded-lg w-full"
              type="text"
              placeholder="Enter the subject"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                Please enter the subject
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-800 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows={6}
              className="placeholder-gray-500 border border-gray-300 focus:outline-none p-3 rounded-lg w-full"
              placeholder="Enter your message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                Please enter your message
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-black p-3 rounded-lg font-bold w-full text-white hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
