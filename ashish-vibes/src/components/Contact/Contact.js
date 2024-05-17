import React, { useState } from "react";
import "../About/About.css";
import "./Contact.css";
import "../../../src/Home.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="">
      <div className="flex justify-center p-11">
        <div className="primary-color text-4xl font-bold">Contact Us</div>
        <div className="underLine contactUsLine flex responsive flex-col mt-11"></div>
      </div>
      <div className="mobile-800 flex responsive flex-row justify-center">
        <div className="px-2 m-5">
          {submitted ? (
            <p className="text-green-600 font-semibold mb-5">
              Thanks for connecting with us!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="w-72">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Comment"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="formButtom flex text-white font-semibold"
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="flex responsive flex-col md:flex-row justify-center">
          <div className="Image Image-contactUs w-48"> </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div></div>
        <fieldset className="contactDetails text-white flex flex-col w-80 p-3">
          <label className="flex justify-center">
            Mobile No. :
            <a href="tel:+918418065420" className="text-blue-500 ml-2">
              +91 8418065420
            </a>
          </label>
          <label className="flex justify-center">
            E-mail :
            <a
              href="mailto:rl.ashish01@gmail.com"
              className="text-blue-500 ml-2"
            >
              rl.ashish01@gmail.com
            </a>
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default Contact;
