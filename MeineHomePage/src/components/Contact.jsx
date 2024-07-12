import React, { useState } from "react";
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("submitting");

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append("access_key", "61e9e7ba-5bac-4c0c-8b6d-50f2e3d7d5f5");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <div id="aboutPage" className="w-full min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 bg-opacity-0">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-5xl font-bold" style={{ fontSize: '2em', paddingLeft: '5px', color: 'orange' }}>Contact Me</h2>
              <p className="mt-2 text-center text-med text-orange-300">
                I'd love to hear from you!
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={onSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <div className="relative rounded-full shadow-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AiOutlineUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <div className="relative rounded-full shadow-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <AiOutlineMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <div className="relative rounded-2xl shadow-lg">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-2 flex items-start pointer-events-none">
                      <AiOutlineMessage className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-2xl bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:border-gray-500"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center rounded-full shadow-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                  disabled={submitStatus === "submitting"}
                >
                  <AiOutlineMail className="mr-2" size={20} />
                  {submitStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitStatus === "success" && (
                <p className="mt-2 text-center text-green-500">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-2 text-center text-red-500">Error sending message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
        <style jsx>{`
          #aboutPage::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-size: cover;
            background-position: center bottom;
            z-index: -1;
          }
        `}</style>
      </div>
      <footer className='text-center text-orange-400'>
        <p>© 2024 Built with love and Coffee.</p>
      </footer>
    </>
  );
};

export default Contact;