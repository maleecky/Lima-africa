"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactFormContents, productsContent } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import BenedictsDialog from "@/components/forms/registration/_component/dialog_beneficts";
import SectionTagHeading from "@/components/global/tags-heading";
import Reveal from "@/components/global/reveal";
import ImageReveal from "@/components/global/image-reveal";
import PurchaseForm from "./purchase_form";

type props = {
  productId?: number;
  productName?: string;
};

const ProductPage = ({ productId, productName }: props) => {
  const displayedProduct = () => {
    if (productId !== undefined && productId >= 0) {
      return productsContent.products[productId];
    } else if (productName) {
      return productsContent.bsfLive;
    }
  };
  const ref = useRef<HTMLSelectElement>(null);
  const [currency, setCurrency] = useState("TZS");
  const [rate, setRate] = useState();
  const [amount, setAmount] = useState(displayedProduct()?.price);

  console.log(amount);

  const url = `https://v6.exchangerate-api.com/v6/f7b27ef9cd1c0e21d8d36e83/latest/TZS`;
  const options = {
    method: "GET",
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      let displayedAmount;
      const products = displayedProduct();
      if (products) {
        if (currency === "TZS") {
          displayedAmount = products.price * response.conversion_rates.TZS;
        }
        if (currency === "USD") {
          displayedAmount = Math.floor(
            products.price * response.conversion_rates.USD
          );
        }
        if (currency === "EUR") {
          displayedAmount = Math.floor(
            products.price * response.conversion_rates.EUR
          );
        }
      }
      setAmount(displayedAmount);
    })
    .catch((err) => {
      if (err) {
        let displayedAmount;
        const products = displayedProduct();
        if (products) {
          if (currency === "TZS") {
            displayedAmount = products.price;
          }
          if (currency === "USD") {
            displayedAmount = Math.floor(products.price * 0.00038);
          }
          if (currency === "EUR") {
            displayedAmount = Math.floor(products.price * 0.0004);
          }
        }
        setAmount(displayedAmount);
      }
    });

  const handleSelection = () => {
    if (ref.current) {
      const cv: string = ref.current?.value;
      setCurrency(cv);
    }
  };

  return (
    <div className="flex flex-col justify-center w-full pb-[2rem] lg:px-14 md:px-12 px-6 pt-[5rem]">
      <div className="max-w-[2000px] mx-auto w-full">
        <section className="flex min-[860px]:flex-row flex-col min-[860px]:max-w-[70em] max-w-full min-[860px]:gap-20 gap-10 mt-[5em] rounded-lg  ">
          <div className="relative flex-[0_0_50%] [min-860px]:max-w-[600px] min-w-[10em] min-h-[20em] max-xs:min-h-[10em] p-4 rounded-2xl bg-[#3D5C30]  text-[#1e1e1e] min-[860px]:flex-[0_0_50%]  w-full ">
            <Reveal styles="text-sm absolute top-[8px] left-[8px] bg-[#C6E156] rounded-2xl py-2 px-4  ">
              Lima Product
            </Reveal>
            <ImageReveal styles="absolute h-full left-0 top-0 w-full flex justify-center items-center">
              <Image
                //@ts-ignore
                src={displayedProduct().img}
                fill
                sizes="(min-width: 768px) 100vw "
                alt="hero image "
                className="object-contain w-full  h-full object-center  "
              />
            </ImageReveal>
          </div>
          <div className="min-[860px]:flex-[0_0_50%] flex-[0_0_100%] w-full flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              <Reveal>
                <SectionTagHeading width="lg:text-[1.8em] text-[#1e1e1e] !text-left text-2xl font-semibold ">
                  {
                    //@ts-ignore
                    displayedProduct().title
                  }
                </SectionTagHeading>
              </Reveal>
              <ul className="flex flex-col mb-4 md:gap-4 gap-2 list-disc">
                {
                  //@ts-ignore
                  displayedProduct().benefits.map((description, index) => (
                    <Reveal
                      key={index}
                      styles="md:text-[1.25em] text-[1.125em] text-[#1e1e1e] leading-[1.2] md:leading-[1.4rem]"
                    >
                      {description}
                    </Reveal>
                  ))
                }
              </ul>
              <Reveal styles="md:text-[1.25em] text-[1.125em] text-[#1e1e1e]">
                <span>Price: </span>
                {
                  //@ts-ignore
                  `${amount} ${displayedProduct()?.quantity.replace(
                    "TZS",
                    currency
                  )} `
                }
                <select
                  ref={ref}
                  onChange={handleSelection}
                  className="bg-[#FECC00] ml-4 text-sm font-medium rounded-full px-2.5 py-1"
                  name="currency"
                  id="currency"
                >
                  <option value="TZS">TZS</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </Reveal>
            </div>
            <div className="min-[340px]:flex-row flex-col flex !mt-10 items-center gap-4">
              <Button
                asChild
                variant={"ghost"}
                className="border border-green-700 p-6  xmd:!text-base max-xmd:w-full rounded-full max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0"
              >
                <Link
                  href={`https://wa.me/${
                    contactFormContents.contactsInformation[0].label.split(
                      "+"
                    )[1]
                  }?text=Hello%20Lima%20I'm%20interested%20in%20purchasing%20${
                    //@ts-ignore
                    displayedProduct().title
                  }`}
                  target="_blank"
                  className="text-green-700"
                >
                  Inquire via whatsapp
                </Link>
              </Button>
              <BenedictsDialog
                btn={
                  //@ts-ignore
                  displayedProduct().actionBtn.label
                }
                btnStyles="bg-green-800 hover:text-[#fff] lg:hover:bg-green-800 hover:bg-green-800 p-6  xmd:!text-base text-white max-xmd:w-full rounded-full lg:hover:bg-green-800  max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0"
              >
                <PurchaseForm displayedProduct={displayedProduct} />
              </BenedictsDialog>
            </div>
          </div>
        </section>
        <section className="w-full pt-[5em] pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <Reveal>
              <SectionTagHeading width="md:text-[1.375em] !text-left text-2xl font-medium">
                Product Descriptions
              </SectionTagHeading>
            </Reveal>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] md:leading-[1.4rem] w-full xmd:max-w-[800px]">
              <Reveal>
                <p>
                  {
                    //@ts-ignore
                    displayedProduct().descriptions
                  }
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <Reveal>
              <SectionTagHeading width="md:text-[1.375em] !text-left text-2xl font-medium">
                Applications of{" "}
                {
                  //@ts-ignore
                  displayedProduct().title
                }
              </SectionTagHeading>
            </Reveal>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] md:leading-[1.4rem] w-full xmd:max-w-[800px]">
              <Reveal>
                <p>
                  {
                    //@ts-ignore
                    displayedProduct().Applications
                  }
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <Reveal>
              <SectionTagHeading width="md:text-[1.375em] text-2xl !text-left font-medium">
                Suitable for
              </SectionTagHeading>
            </Reveal>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] leading-[1.4rem] w-full xmd:max-w-[800px]">
              <Reveal>
                <p>
                  {
                    //@ts-ignore
                    displayedProduct().suitable
                  }
                </p>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <Reveal>
              <SectionTagHeading width="md:text-[1.4em] !text-left text-2xl  font-medium">
                Nutritional Contents
              </SectionTagHeading>
            </Reveal>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] leading-[1.4rem] w-full xmd:max-w-[800px]">
              {
                //@ts-ignore
                displayedProduct().NutritionalContents.map((content, index) => (
                  <Reveal key={index}>
                    <p>{content}</p>
                  </Reveal>
                ))
              }
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <Reveal>
              <SectionTagHeading width="md:text-[1.375em] !text-left text-2xl font-medium">
                Explore more from Lima Africa&apos;s Products
              </SectionTagHeading>
            </Reveal>
            <div className="pt-4 gap-10 w-full xmd:flex-row flex-col relative flex  whitespace-nowrap">
              {productsContent.products.map((product, index) => {
                //@ts-ignore
                if (product.title === displayedProduct().title) {
                  return;
                }
                return (
                  <Button
                    key={index}
                    asChild
                    className="flex  rounded-lg overflow-hidden h-full min-h-[250px]   relative  flex-col  w-full xmd:max-w-[350px] max-sm:min-h-[250px] max-xs:min-w-[150px]   shadow-none hovered p-0"
                    variant={"ghost"}
                  >
                    <Link href={product.link.path}>
                      <Card className="flex border-none  rounded-lg bg-[#3D5C30] p-[1em]  overflow-hidden  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ">
                        <ImageReveal styles="relative flex-1 min-h-[10em]">
                          <Image
                            src={product.img}
                            fill
                            sizes="(min-width: 768px) 100vw"
                            alt={product.title}
                            className={"block object-cover img-container"}
                          />
                        </ImageReveal>
                        <div className="flex flex-col w-full rounded-full items-center   ">
                          <div className="flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal">
                            <div className="flex justify-between relative  items-end  min-h-full z-10 ">
                              <div className="inline-block  w-full  ">
                                <Reveal>
                                  <h4 className=" text-[#fff] relative text-[1.1em] leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ">
                                    {product.title}
                                  </h4>
                                </Reveal>
                                {
                                  //@ts-ignore
                                  product.title === displayedProduct().title ? (
                                    <Reveal>
                                      <p className="text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ">{`${productsContent.bsfLive.descriptions}`}</p>
                                    </Reveal>
                                  ) : (
                                    <Reveal>
                                      <p className="text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ">{`${product.descriptions[0]}`}</p>
                                    </Reveal>
                                  )
                                }
                              </div>
                              <ArrowRight
                                color="white"
                                width={20}
                                className="circle max-sm:w-4 absolute lg:block hidden bottom-0 right-0"
                              />
                            </div>

                            <span className="hidden">{product.link.title}</span>
                            <ArrowRight className="hidden" width={14} />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </Button>
                );
              })}
              {!productName && (
                <Button
                  asChild
                  className="flex  rounded-lg overflow-hidden  h-full min-h-[250px]   relative  flex-col  w-full xmd:max-w-[350px] max-sm:min-h-[250px] max-xs:min-w-[150px]   shadow-none hovered p-0"
                  variant={"ghost"}
                >
                  <Link href={productsContent.bsfLive.link.path}>
                    <Card className="flex border-none  rounded-lg bg-[#3D5C30] p-[1em] overflow-hidden  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ">
                      <ImageReveal styles="relative flex-1 min-h-[10em]">
                        <Image
                          src={productsContent.products[0].img}
                          fill
                          sizes="(min-width: 768px) 100vw"
                          alt={productsContent.bsfLive.title}
                          className={"block object-cover img-container"}
                        />
                      </ImageReveal>
                      <div className="flex flex-col w-full rounded-full items-center   ">
                        <div className="flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal">
                          <div className="flex justify-between relative   items-end  min-h-full z-10 ">
                            <div className="inline-block  w-full  ">
                              <Reveal>
                                <h4 className=" text-[#fff] text-[1.1em] relative  leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ">
                                  {productsContent.bsfLive.title}
                                </h4>
                              </Reveal>
                              <Reveal>
                                <p className="text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ">{`${productsContent.bsfLive.descriptions}`}</p>
                              </Reveal>
                            </div>
                            <ArrowRight
                              color="white"
                              width={20}
                              className="circle max-sm:w-4 absolute lg:block hidden bottom-0 right-0"
                            />
                          </div>

                          <span className="hidden">
                            {productsContent.bsfLive.link.title}
                          </span>
                          <ArrowRight className="hidden" width={14} />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
