import React from "react";

const MissionVision = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Our Mission & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Mission</h3>
          <p>
            To help those who are at the bottom of the pyramid. To work with
            vigour, dedication and innovation to achieve excellence in service,
            quality, reliability, safety and customer care as the ultimate goal.
            To earn the trust and confidence of all stakeholders, exceeding
            their expectations and making the Company a respected household
            name.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Vision</h3>
          <p>
            To attain globally best standards and become a world-class financial
            services enterprise – guided by its purpose to move towards a
            greater degree of sophistication and maturity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
