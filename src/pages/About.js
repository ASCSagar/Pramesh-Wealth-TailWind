import React from "react";
import CompanyHistory from "../components/about/CompanyHistory";
import MissionVision from "../components/about/MissionVision";
import LeadershipTeam from "../components/about/LeadershipTeam";
import Awards from "../components/about/Awards";
import CSR from "../components/about/CSR";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <CompanyHistory />
      <MissionVision />
      <LeadershipTeam />
      <Awards />
      <CSR />
    </div>
  );
};

export default About;