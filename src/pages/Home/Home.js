import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart2,
  Shield,
  Users,
  TrendingUp,
  PiggyBank,
  Clock,
  Calculator,
} from "lucide-react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./Hero/Hero";
import StockTicker from "./StockTicker/StockTicker";
import Service from "./Service/Service";
import MutualFundCalculator from "./Calculater/MutualFundCalculator";
import TaxSavingCalculator from "./Calculater/TaxSavingCalculator";
import FixedDepositCalculator from "./Calculater/FixedDepositCalculator";
import RetirementCalculator from "./Calculater/RetirementCalculator";

const testimonials = [
  {
    name: "Ananya Sharma",
    text: "Working with [Your Company Name] has been a game-changer. Their personalized approach helped me clarify my goals and set me on the path to financial freedom.",
  },
  {
    name: "Rajesh Patel",
    text: "I've seen my investments grow steadily over the years. Their expert advice and diverse portfolio options have truly made a difference.",
  },
  {
    name: "Priya Mehta",
    text: "The team's dedication to understanding my unique financial situation has been impressive. I feel confident about my financial future.",
  },
  {
    name: "Vikram Singh",
    text: "The wealth management strategies provided by the team have exceeded my expectations. I've achieved financial milestones I never thought possible.",
  },
  {
    name: "Neha Gupta",
    text: "Their innovative approach to financial planning has opened up new investment avenues for me. I'm grateful for their expertise and guidance.",
  },
];

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const HomePage = () => {
  const [activeCalculator, setActiveCalculator] = useState("mutualFunds");

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <StockTicker />
      <Hero
        title="Secure Your Financial Future with Wealth Management"
        subtitle="Expert wealth management solutions tailored to your needs"
        ctaText="Start Investing Today"
        ctaLink="/contact"
        height="40vh"
      />

      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Service
            icon={BarChart2}
            title="Systematic Investment Plans (SIPs)"
            description="Invest systematically and watch your wealth grow over time."
          />
          <Service
            icon={Shield}
            title="Insurance"
            description="Protect your family's future with our comprehensive insurance solutions."
          />
          <Service
            icon={Users}
            title="Financial Planning"
            description="Personalized strategies to help you achieve your financial goals."
          />
        </div>
      </section>

      {/* Interactive Calculators */}
      <section className="py-16 px-4 bg-primary-50">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Financial Calculators
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: "mutualFunds", icon: TrendingUp, label: "Mutual Funds" },
              { id: "fixedDeposits", icon: PiggyBank, label: "Fixed Deposits" },
              { id: "retirement", icon: Clock, label: "Retirement" },
              { id: "taxSaving", icon: Calculator, label: "Tax Saving" },
            ].map(({ id, icon: Icon, label }) => (
              <motion.button
                key={id}
                className={`px-4 py-2 rounded-full flex items-center ${
                  activeCalculator === id
                    ? "bg-primary-500 text-white"
                    : "bg-white text-primary-600"
                }`}
                onClick={() => setActiveCalculator(id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </motion.button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCalculator}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCalculator === "mutualFunds" && <MutualFundCalculator />}
              {activeCalculator === "fixedDeposits" && (
                <FixedDepositCalculator />
              )}
              {activeCalculator === "retirement" && <RetirementCalculator />}
              {activeCalculator === "taxSaving" && <TaxSavingCalculator />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary-50">
        <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
          What Our Clients Say
        </h2>
        <Slider {...testimonialSettings} className="max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-xl shadow-soft h-full flex flex-col justify-between">
                <p className="italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-right">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center bg-primary-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-xl mb-8">
          Schedule a free consultation with our experts
        </p>
        <Link
          to="/contact"
          className="bg-white text-primary-500 hover:bg-primary-100 font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300"
        >
          Book Now <ArrowRight className="ml-2" />
        </Link>
      </section>

      {/* Regulatory Information */}
      <footer className="py-8 px-4 text-center text-sm text-neutral-600">
        <p>
          Investment in securities market are subject to market risks. Read all
          scheme related documents carefully before investing.
        </p>
        <p className="mt-2">
          © 2024 Pramesh Wealth. All rights reserved. SEBI Registration No:
          XXXXXXXXXX
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
