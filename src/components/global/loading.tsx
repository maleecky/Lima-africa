import Image from "next/image";
import React from "react";
import loadingIcon from "@/../public/assets/media/loading-icon.png";

const LoadingComponent = () => {
  return (
    <div className="h-screen  w-full overflow-hidden bg-white z-[100000] flex justify-center items-center">
      <div className="loading-icon w-20 h-20">
        <Image
          src={loadingIcon}
          fill
          alt=""
          sizes="100vw"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
