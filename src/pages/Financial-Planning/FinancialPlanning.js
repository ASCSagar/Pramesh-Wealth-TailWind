import React from "react";
import Layout from "../../components/layout/Layout";
import GoalsAssessment from "./financial-planning/GoalsAssessment";
import RiskProfiling from "./financial-planning/RiskProfiling";
import CustomizedPlans from "./financial-planning/CustomizedPlans";
import PortfolioManagement from "./financial-planning/PortfolioManagement";

const FinancialPlanning = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Financial Planning</h1>
        <GoalsAssessment />
        <RiskProfiling />
        <CustomizedPlans />
        <PortfolioManagement />
      </div>
    </Layout>
  );
};

export default FinancialPlanning;
