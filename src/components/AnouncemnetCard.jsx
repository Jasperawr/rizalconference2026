import React from "react";

const AnnouncementCard = ({ title, date, content, images = [] }) => {
  const renderImages = () => {
    if (images.length === 1) {
      return (
        <div className="w-full mb-6">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 mb-6">
          {images.slice(0, 2).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title}-${i}`}
              className="w-full h-[400px] object-cover"
            />
          ))}
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className="w-full mb-6">
          {/* Top Large Image */}
          <div className="w-full aspect-[4/3]">
            <img
              src={images[0]}
              alt="main"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Two Images */}
          <div className="grid grid-cols-2">
            <div className="aspect-square">
              <img
                src={images[1]}
                alt="bottom-left"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square">
              <img
                src={images[2]}
                alt="bottom-right"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      );
    }

    if (images.length === 4) {
      return (
        <div className="grid grid-cols-2 mb-6">
          {images.slice(0, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title}-${i}`}
              className="w-full h-[250px] object-cover"
            />
          ))}
        </div>
      );
    }

    // 5+
    return (
      <div className="grid grid-cols-2 mb-6">
        {images.slice(0, 4).map((img, i) => (
          <div key={i} className="relative">
            <img
              src={img}
              alt={`${title}-${i}`}
              className="w-full h-[250px] object-cover"
            />
            {i === 3 && images.length > 4 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">
                  +{images.length - 4}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-3xl bg-white shadow-md">
      {images.length > 0 && renderImages()}

      <div className="p-6 md:p-8">
        <p className="text-sm text-gray-500 mb-2">{date}</p>

        <h2 className="text-2xl md:text-3xl font-semibold font-lora mb-4">
          {title}
        </h2>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCard;
