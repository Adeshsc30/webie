import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import formImage from "../assets/formIMg.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_lq1ochm",
        "template_hko90bv",
        form.current,
        "b0zki91GuLVhtBM7I",
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(""), 5000)
      })
      .catch((error) => {
        console.log("EmailJS error:", error)
        setStatus("failed");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      {/* outer wrapper */}
      <div className="relative w-full max-w-4xl md:mt-0 mt-20">
        {/* form */}
        <div className="ml-0 md:ml-24 bg-gray-900 rounded-3xl border border-white/10 shadow-2xl p-6 pt-40 md:p-10 md:pl-56">
          <h1 className="text-3xl font-bold text-white font-mono mb-1">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-white/50 text-sm font-mono mb-8">
            Lets talk! We can get to know eachother
          </p>
          <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label
                htmlFor=""
                className="text-white/50 text-xs font-mono mb-1 block"
              >
                Full Name:
              </label>
              <input
                type="text"
                placeholder="Adesh Shahi"
                name="user_name"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-blue-500 transition duration-200 placeholder-white/20 font-mono text-sm"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor=""
                  className="text-white/50 text-xs font-mono mb-1 block"
                >
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-blue-500 transition duration-200 placeholder-white/20 font-mono text-sm"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor=""
                  className="text-white/50 text-xs font-mono mb-1 block"
                >
                  Contact:
                </label>
                <input
                  type="number"
                  placeholder="Contact"
                  name="user_phone"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-blue-500 transition duration-200 placeholder-white/20 font-mono text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-white/50 text-xs font-mono mb-1 block"
              >
                Message:
              </label>
              <textarea
                placeholder="Message"
                rows={4}
                name="message"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-xl outline-none border border-white/10 focus:border-blue-500 transition duration-200 placeholder-white/20 font-mono text-sm resize-none"
              />
            </div>
            <button
  type="submit"
  disabled={status === "sending"}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200 font-mono tracking-wide mt-2 disabled:opacity-50"
>
  {status === "sending" ? "Sending... ⏳" : "Send Message"}
</button>
            {status && (
  <p className={`text-sm text-center mt-3 font-mono ${
    status === "success"
      ? "text-green-400"
      : status === "failed"
        ? "text-red-400"
        : "text-yellow-400"
  }`}>
    {status === "sending"
      ? "Sending... ⏳"
      : status === "success"
        ? "Message sent successfully ✅"
        : "Failed to send message ❌"}
  </p>
)}
          </form>
        </div>
        {/* image */}
        <div
          className="absolute
                        top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-72 fit-content mx-auto
                        md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:left-0 md:h-[110%] md:w-72"
        >
          <img
            src={formImage}
            alt="AdeshShahi"
            className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/10"
          />
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
