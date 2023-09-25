import React from 'react';

const Card = ({ title, desc, img, color }) => {
  return (
    <div
      className={`p-4 text-[15px] flex flex-col gap-10 shadow-xl max-w-[415px] border-t-4 rounded-lg border-[#${color}]`}
    >
      <div>
        <h3 className="text-[#4c4e61]">{title}</h3>
        <p className="text-[#a3a5ae]">{desc}</p>
      </div>
      <img className="self-end" src={img} alt={title} />
    </div>
  );
};

export default Card;
