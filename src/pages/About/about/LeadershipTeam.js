import React from 'react';

const leaders = [
  { name: 'Rajiv Mehta', position: 'CEO', bio: 'With over 25 years of experience in finance, Rajiv leads our company with vision and integrity.' },
  { name: 'Priya Singh', position: 'CIO', bio: 'Priya brings her extensive knowledge in investment strategies to guide our clients towards financial success.' },
  { name: 'Amit Patel', position: 'Head of Client Relations', bio: 'Amit ensures that our clients receive personalized attention and top-notch service.' },
];

const LeadershipTeam = () => {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
              <p className="text-blue-600 mb-2">{leader.position}</p>
              <p>{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default LeadershipTeam;