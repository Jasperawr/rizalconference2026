import React from "react";
import SkeletonCard from "./SkeletonCard";

const SpeakersSkeleton = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Speakers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default SpeakersSkeleton;
