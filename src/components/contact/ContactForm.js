import React from "react";

const ContactForm = () => {
  return (
    <form>
      {/* onSubmit={handleSubmit} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <input
            type="text"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            // value={formData.phone}
            // onChange={handleChange}
            placeholder="Number"
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="address"
            // value={formData.address}
            // onChange={handleChange}
            placeholder="Address"
            className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button className="bg-primary-500 text-white py-3 rounded-md text-base font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300 ease-in-out">
            Submit
          </button>
        </div>

        <div className="mt-11">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118153.91142593985!2d73.07965027153378!3d22.26625412209866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395fc7e6c7e25675%3A0x7d7190b6d655a076!2sPRAMESH%20HOUSE%22%20-%20B%2F8%20%2CVedant%20Bunglow%20B%2Fh%20Delhi%20Public%20School%2C%20Main%2C%20Kalali%20Rd%2C%20Kalali%2C%20Vadodara%2C%20Gujarat%20390012!3m2!1d22.2662749!2d73.1620519!5e0!3m2!1sen!2sin!4v1729510282554!5m2!1sen!2sin"
            width="600"
            height="410"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
