import ExportedImage from "next-image-export-optimizer";
import React from "react";
import loadingIcon from "@/../public/assets/media/loading-icon.png";

const LoadingComponent = () => {
  return (
    <div className="h-screen  w-full overflow-hidden bg-white z-[100000] flex justify-center items-center">
      <div className="loading-icon w-20 h-20">
        <ExportedImage
          src={loadingIcon}
          fill
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
