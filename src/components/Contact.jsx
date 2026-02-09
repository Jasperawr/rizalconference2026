import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <div className="bg-[#7b1502] py-3 text-gray-50 text-xs flex justify-center items-center gap-8">
      <p className="flex items-center gap-2">
        <Icon icon="mdi:facebook" className="text-2xl" />
        Rizal Conference 2026
      </p>

      <p className="flex items-center gap-2">
        <Icon icon="material-symbols:mail-outline" className="text-2xl" />
        rizalconference.2026@gmail.com
      </p>

      <p className="flex items-center gap-2">
        <Icon icon="material-symbols:call-outline" className="text-xl" />
        +63 91234567890
      </p>
    </div>
  );
};

export default Contact;
