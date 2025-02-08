"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const message = watch("message", "");
  const maxMessageLength = 5000;

  const onSubmit = (data: FormData) => {
    const { name, email, message } = data;
    const subject = encodeURIComponent(`Contact Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:pavansai0810@gmail.com?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-black w-full" id="contact">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Have a project in mind? Let’s talk!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
          {/* Name Field */}
          <div>
            <label
              className="block text-sm font-semibold text-black dark:text-white"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className="w-full mt-2 p-3 border border-gray-400 dark:border-gray-600 rounded bg-white dark:bg-black text-black dark:text-white focus:border-gray-500 dark:focus:border-gray-300 focus:ring focus:ring-gray-300 dark:focus:ring-gray-500 transition-all"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-sm font-semibold text-black dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full mt-2 p-3 border border-gray-400 dark:border-gray-600 rounded bg-white dark:bg-black text-black dark:text-white focus:border-gray-500 dark:focus:border-gray-300 focus:ring focus:ring-gray-300 dark:focus:ring-gray-500 transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <label
              className="block text-sm font-semibold text-black dark:text-white"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: maxMessageLength,
                  message: `Message cannot exceed ${maxMessageLength} characters`,
                },
              })}
              className="w-full mt-2 p-3 border border-gray-400 dark:border-gray-600 rounded bg-white dark:bg-black text-black dark:text-white focus:border-gray-500 dark:focus:border-gray-300 focus:ring focus:ring-gray-300 dark:focus:ring-gray-500 transition-all h-32 resize-none"
            />
            {/* Character Count - Positioned Bottom-Right */}
            <p className="absolute bottom-2 right-2 text-sm text-gray-500 dark:text-gray-400">
              {message.length} / {maxMessageLength}
            </p>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button - Bottom Left */}
          <div className="flex justify-start">
            <button
              type="submit"
              disabled={!isValid}
              className={`relative py-3 px-6 font-semibold rounded shadow-md flex items-center gap-2 transition-all ${
                isValid
                  ? "bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Send Message{" "}
              <span className="icon-paper-plane-o transform transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
