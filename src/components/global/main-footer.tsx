import clsx from "clsx";
import React from "react";

const MainFooter = ({ theme }: { theme?: string }) => {
  return (
    <div
      className={clsx(" max-md:text-sm  w-full  text-center lg:px-8 px-4", {
        "text-white": theme,
        "text-[#1e1e1e]": !theme,
      })}
    >
      <p>Copyright © 2023 LIMA Co. Ltd. All rights reserved.</p>
      <div className="text-center">
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms-and-conditions">Terms and Conditions</a>
      </div>
    </div>
  );
};

export default MainFooter;
