import React from "react";
import SkeletonCard from "./SkeletonCard";

const OrganizersSkeleton = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Organizers and Partners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default OrganizersSkeleton;
