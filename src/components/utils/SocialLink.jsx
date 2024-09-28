import React from 'react';

const SocialLink = ({ icon, colorClass }) => {
  return (
    <div
      className={`flex items-center justify-center ${colorClass} rounded-full p-3 w-12 h-12 transition-transform transform hover:scale-110`}
    >
      {React.cloneElement(icon, { className: 'text-white w-8 h-8' })}
    </div>
  );
};

export default SocialLink;
