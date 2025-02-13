import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsClicked(true);

    emailjs
      .sendForm(
        "service_js8ihk6",
        "template_2i0trch",
        form.current,
        "nTIgsJ294hbBd2wTT"
      )
      .then(
        (result) => {
          console.log("Message sent: ", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error: ", error.text);
          alert("Failed to send message. Try again later.");
        }
      );
    e.target.reset();
    setTimeout(() => setIsClicked(false), 2000); // Reset button color after 2 seconds
  };

  return (
    <section className="flex flex-col justify-center items-center text-center h-screen w-full px-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="mt-4 text-gray-400">Feel free to reach out!</p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-6 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <label className="block text-left text-gray-400 mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        />

        <label className="block text-left text-gray-400 mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        />

        <label className="block text-left text-gray-400 mb-2">Message</label>
        <textarea
          name="message"
          required
          className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className={`px-4 py-2 rounded font-bold text-white ${
            isClicked ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
