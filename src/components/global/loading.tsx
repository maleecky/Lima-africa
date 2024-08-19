import Image from "next/image";
import React from "react";
const loadingIcon = "v1721898382/loading-icon_cclfze.png";

const LoadingComponent = () => {
  return (
    <div className="h-screen  w-full overflow-hidden bg-white z-[100000] flex justify-center items-center">
      <div className="loading-icon w-20 h-20">
        <Image
          src={loadingIcon}
          fill
          alt=""
          sizes="(min-width:768px) 100vw"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
