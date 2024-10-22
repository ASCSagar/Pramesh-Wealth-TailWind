// src/pages/Resources.js
import React from "react";
import Layout from "../../components/layout/Layout";
import BlogPosts from "./resources/BlogPosts";
import EducationalGuides from "./resources/EducationalGuides";
import MarketUpdates from "./resources/MarketUpdates";
import Calculators from "./resources/Calculators";

const Resources = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <BlogPosts />
        <EducationalGuides />
        <MarketUpdates />
        <Calculators />
      </div>
    </Layout>
  );
};

export default Resources;
