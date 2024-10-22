import React, { useState } from "react";
import { BarChart2, Shield, Briefcase } from "lucide-react";

const Services = () => {
  const [activeSection, setActiveSection] = useState("sip");

  const services = [
    { id: "sip", name: "SIPs", icon: BarChart2 },
    { id: "insurance", name: "Insurance", icon: Shield },
    { id: "investment", name: "Investment Products", icon: Briefcase },
  ];

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Our Services
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeSection === service.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-white text-primary-600 hover:bg-primary-100"
              }`}
              onClick={() => setActiveSection(service.id)}
            >
              <service.icon className="w-5 h-5 mr-2" />
              {service.name}
            </button>
          ))}
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Expert Guidance
              </h3>
              <p>
                Our team of certified financial advisors is dedicated to helping
                you make informed decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Customized Solutions
              </h3>
              <p>
                We understand that one size doesn't fit all; we tailor our
                products to meet your unique needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Technology-Driven
              </h3>
              <p>
                Utilize our state-of-the-art online platforms for seamless
                investing and portfolio tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">
                Transparent Processes
              </h3>
              <p>
                We believe in building trust through complete transparency in
                our operations.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Take the First Step Towards Financial Excellence
            </h3>
            <p className="mb-6">
              Your journey to financial prosperity is just a click away. Reach
              out to us for a personalized consultation, and let's build a
              roadmap to achieve your financial dreams together.
            </p>
            <button className="bg-primary-500 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-600 transition duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
