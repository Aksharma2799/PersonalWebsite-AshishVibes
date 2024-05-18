import React, { useState } from "react";
import emailjs, { send } from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      setError(null);
      toast.success("Email sent successfully!");
    }).catch((err) => {
      console.error('FAILED...', err);
      setError('Failed to send the message. Please try again.');
    });
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
                  name="user_name"
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
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              {/* <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div> */}
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Comment"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              {error && <p className="text-red-600 mb-4">{error}</p>}
              <button
                type="submit"
                value={send}
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
            E-mail :
            <a
              href="mailto:ashishvibes19@gmail.com"
              className="text-blue-500 ml-2"
            >
              ashishvibes19@gmail.com
            </a>
          </label>
        </fieldset>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Contact;
