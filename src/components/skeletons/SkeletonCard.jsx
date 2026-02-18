import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white shadow rounded-2xl p-6 w-full">
      <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4"></div>

      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-2/3 mx-auto"></div>
    </div>
  );
};

export default SkeletonCard;
