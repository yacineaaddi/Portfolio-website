import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none dark:hidden">
      <Image
        src={assets.background}
        alt=""
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Background;
