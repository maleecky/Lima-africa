import DistributorForm from "@/components/forms/registration/distributor_form";
import React from "react";

const DistributorPage = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center lg:px-14 md:px-8 px-4 pt-[5rem]">
      <DistributorForm />
    </div>
  );
};

export default DistributorPage;
