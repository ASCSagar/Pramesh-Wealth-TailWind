import React from "react";
import CompanyHistory from "./about/CompanyHistory";
import MissionVision from "./about/MissionVision";
import LeadershipTeam from "./about/LeadershipTeam";
import Awards from "./about/Awards";
import CSR from "./about/CSR";

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
