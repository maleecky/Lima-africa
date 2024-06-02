import SupplierForm from "@/components/forms/registration/supplier_form";
import React from "react";

const FarmerSupplier = () => {
  return (
    <div className="flex flex-col justify-center w-full  items-center lg:px-14 md:px-8 px-4 pt-[5rem]">
      <SupplierForm />
    </div>
  );
};

export default FarmerSupplier;
