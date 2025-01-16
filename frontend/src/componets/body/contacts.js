import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com"; 

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const checkEmail = () => {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (!formData.email.match(emailRegex)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Enter a valid email address",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page refresh
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      Swal.fire({
        title: "Error",
        text: "All fields are required.",
        icon: "error",
      });
      return;
    }

    // Sending email using EmailJS
    const bodyMessage = `
      Full Name: ${name}<br>
      Email: ${email}<br>
      Phone Number: ${phone}<br>
      Message: ${message}<br>
    `;

    emailjs
      .send(
        "service_gvp4iu1",
        "template_ijzciyi",
        {
          name,
          email,
          phone,
          subject,
          message,
        },
        "rSjOY7FBMIqEQcw9g"
      )
      .then(
        (response) => {
          Swal.fire({
            title: "Success",
            text: "Message sent successfully",
            icon: "success",
          });
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: `Message failed to send: ${error.text}`,
            icon: "error",
          });
        }
      );
  };

  return (
    <>
<section id="contact" className="parallax3 p-8 pt-24 pb-24 bg-[#ffffff]">
  <div className="h-100 text-white">
    <h1 className="display-4 mb-3 p-4 text-black text-2xl text-center">Contact Us</h1>

    <div className="flex justify-center items-center space-x-8">
      {/* Left Side: Map */}
      <div className="w-full lg:w-1/2 h-96 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.845569110873!2d36.90362082223086!3d-1.2652338109433203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f146110289521%3A0x3669d7435067ca87!2sSector%203B!5e0!3m2!1sen!2ske!4v1736434341879!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
        ></iframe>
        </div>



      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-1/2">
        <div className="overlay rounded p-4 w-full d-flex justify-content-center">
          <form
            id="contact-form"
            className="space-y-6"
            onSubmit={sendEmail}
          >
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  className="peer w-full p-3 border text-black border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" " // Required for the floating label effect
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-3 text-gray-500 text-sm bg-[#ffffff] transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-amber-500 peer-focus:text-sm"
                >
                  Name
                </label>
                {errors.name && <div className="text-red-600 text-xs">{errors.name}</div>}
              </div>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  className="peer w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={checkEmail}
                  placeholder=" " // Required for the floating label effect
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 text-gray-500 bg-[#ffffff] text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-amber-500 peer-focus:text-sm"
                >
                  Email Address
                </label>
                {errors.email && <div className="text-red-600 text-xs">{errors.email}</div>}
              </div>
            </div>

            {/* Phone and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  id="phone"
                  className="peer w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                className="absolute left-3 top-3 text-gray-500 bg-[#ffffff] text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-amber-500 peer-focus:text-sm"
                >
                  Phone
                </label>
                {errors.phone && <div className="text-red-600 text-xs">{errors.phone}</div>}
              </div>

              <div className="relative group">
                <input
                  type="text"
                  id="subject"
                  className="peer w-full p-3 border text-black  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                className="absolute left-3 top-3 bg-[#ffffff] text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-amber-500 peer-focus:text-sm"
                >
                  Subject
                </label>
                {errors.subject && <div className="text-red-600 text-xs">{errors.subject}</div>}
              </div>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                id="message"
                rows="5"
                className="peer w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.message}
                onChange={handleInputChange}
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-3 bg-[#ffffff] text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-amber-500 peer-focus:text-sm"
              >
                Message
              </label>
              {errors.message && <div className="text-red-600 text-xs">{errors.message}</div>}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#af8b7f] text-white rounded-lg hover:bg-[#896052] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Contacts;
