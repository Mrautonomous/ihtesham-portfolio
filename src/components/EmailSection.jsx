import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox will always be
          at your service. Whether you have a question or talk about your
          project or work, i will try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Mrautonomous">
            <Image
              className="rounded-md bg-white"
              src="/images/GitIcon.png"
              width={50}
              height={50}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/ihtisham-ahmad-1b2169273/">
            <Image
              className="rounded-md bg-white"
              src="/images/linkedinicon.png"
              width={50}
              height={50}
            />
          </Link>

          <Link href="https://web.facebook.com/Mr.Autonomos/">
            <Image
              className="rounded-md"
              src="/images/facebookicon.png"
              width={50}
              height={50}
            />
          </Link>

          <Link href="https://www.instagram.com/ihteshaam.exe/">
            <Image
              className="rounded-md"
              src="/images/instagram.png"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-indigo-900 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="text"
              required
              className="bg-indigo-900 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just say hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              {" "}
              Message{" "}
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-indigo-900 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Send me a Message, Let's talk..."
            />
            <button
              type="submit"
              className="bg-purple-600 text-white font-medium py-2.5 mt-2 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
