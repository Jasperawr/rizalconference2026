import React from "react";

const PartnersCard = ({ img, name, sub }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transition">
      <div className="aspect-[3/3] flex flex-col items-center justify-center p-6 text-center">
        <img
          src={img}
          alt={name}
          className="w-48 h-48 rounded-full object-cover mb-4 bg-gradient-to-r from-red-900 to-amber-900"
        />

        <h3 className="text-lg font-semibold uppercase">{name}</h3>
        <div className=" text-sm text-gray-600">
          {Array.isArray(sub) ? (
            sub.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{sub}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnersCard;
