"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contactFormContents, productsContent } from "@/lib/constants";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import BenedictsDialog from "@/components/forms/registration/_component/dialog_beneficts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(1),
  quantity: z.coerce.number().min(1).max(99).int(),
  product: z.string().optional(),
});

type props = {
  productId?: number;
  productName?: string;
};
type FormSchemaType = z.infer<typeof FormSchema>;

const ProductPage = ({ productId, productName }: props) => {
  const router = useRouter();

  const displayedProduct = () => {
    if (productId !== undefined && productId >= 0) {
      return productsContent.products[productId];
    } else if (productName) {
      return productsContent.bsfLive;
    }
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      quantity: 0,
      //@ts-ignore
      product: displayedProduct()?.title || "",
    },
  });

  const submitHandler = (values: FormSchemaType) => {
    toast({
      title: "Success",
      description: "The message is sent",
    });
    form.reset();
    router.refresh();
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="flex flex-col justify-center w-full pb-[2rem] lg:px-14 md:px-8 px-4 pt-[5rem]">
      <div className="max-w-[2000px] mx-auto w-full">
        <section className="flex min-[860px]:flex-row flex-col min-[860px]:max-w-[70em] max-w-full min-[860px]:gap-20 gap-10 mt-[5em] rounded-lg  ">
          <div className="relative flex-[0_0_50%] [min-860px]:max-w-[600px] min-w-[10em] min-h-[20em] max-xs:min-h-[10em] p-4 rounded-2xl bg-[#013941]  text-[#1e1e1e] min-[860px]:flex-[0_0_50%]  w-full ">
            <div className="text-sm absolute top-[8px] left-[8px] bg-[#C6E156] rounded-2xl py-2 px-4  ">
              Lima Product
            </div>
            <Image
              //@ts-ignore
              src={displayedProduct().img}
              fill
              sizes="100vw"
              alt="hero image "
              className="object-contain w-full  h-full object-center  "
            />
          </div>
          <div className="min-[860px]:flex-[0_0_50%] flex-[0_0_100%] w-full flex flex-col">
            <div className="flex flex-col gap-4 w-full">
              <h2 className="lg:text-[1.8em] text-[#1e1e1e] text-2xl font-semibold ">
                {
                  //@ts-ignore
                  displayedProduct().title
                }
              </h2>
              <ul className="flex flex-col p-4 !pl-6 md:gap-4 gap-2 list-disc">
                {
                  //@ts-ignore
                  displayedProduct().benefits.map((description, index) => (
                    <li
                      key={index}
                      className="md:text-[1.25em] text-[1.125em] text-[#1e1e1e] leading-[1.2] md:leading-[1.4rem]"
                    >
                      {description}
                    </li>
                  ))
                }
              </ul>
              <p className="md:text-[1.25em] text-[1.125em] text-[#1e1e1e]">
                <span>Price: </span>
                {
                  //@ts-ignore
                  displayedProduct().price
                }
              </p>
            </div>
            <div className="min-[340px]:flex-row flex-col flex !mt-10 items-center gap-4">
              <Button
                asChild
                className="bg-green-700 p-6  xmd:!text-base max-xmd:w-full rounded-full lg:hover:bg-green-800 hover:bg-green-800 max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0"
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
                >
                  Inquire via whatsapp
                </Link>
              </Button>
              <BenedictsDialog
                btn={
                  //@ts-ignore
                  displayedProduct().actionBtn.label
                }
                btnStyles="bg-green-700 hover:text-[#fff] lg:hover:bg-green-800 hover:bg-green-800 p-6  xmd:!text-base text-white max-xmd:w-full rounded-full lg:hover:bg-green-800  max-[192px]:whitespace-normal flex space-x-2 max-[192px]:text-center !h-0"
              >
                <div className="p-6 ">
                  <h3 className="lg:max-w-[15em] py-3 w-full text-[1.5em] leading-[1.1] font-medium">
                    Fill the Form to inquire the Product
                  </h3>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(submitHandler)}
                      className="space-y-5 w-full "
                    >
                      <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Your fullname"
                                type="text"
                                {...field}
                                className="border placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Your Email"
                                type="text"
                                {...field}
                                className="border placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        disabled={isLoading}
                        name="quantity"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="How many kilos you want"
                                {...field}
                                type="number"
                                className="border placeholder:text-[13px] border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        disabled
                        name="product"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                defaultValue={
                                  //@ts-ignore
                                  displayedProduct().title
                                }
                                {...field}
                                type="text"
                                className="border placeholder:text-[13px] border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        className=" px-4 bg-[#022F35] max-w-[200px] w-full "
                        type="submit"
                      >
                        Inquire via Email
                      </Button>
                    </form>
                  </Form>
                </div>
              </BenedictsDialog>
            </div>
          </div>
        </section>
        <section className="w-full pt-[5em] pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <h2 className="md:text-[1.375em] text-2xl font-medium">
              Product Descriptions
            </h2>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] md:leading-[1.4rem] w-full xmd:max-w-[800px]">
              <p>
                {
                  //@ts-ignore
                  displayedProduct().descriptions
                }
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <h2 className="md:text-[1.375em] text-2xl font-medium">
              Applications of{" "}
              {
                //@ts-ignore
                displayedProduct().title
              }
            </h2>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] md:leading-[1.4rem] w-full xmd:max-w-[800px]">
              <p>
                {
                  //@ts-ignore
                  displayedProduct().Applications
                }
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <h2 className="md:text-[1.375em] text-2xl font-medium">
              Suitable for
            </h2>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] leading-[1.4rem] w-full xmd:max-w-[800px]">
              <p>
                {
                  //@ts-ignore
                  displayedProduct().suitable
                }
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <h2 className="md:text-[1.4em] text-2xl  font-medium">
              Nutritional Contents
            </h2>
            <div className=" md:text-[1.125em]  text-[#1e1e1e] leading-[1.4rem] w-full xmd:max-w-[800px]">
              {
                //@ts-ignore
                displayedProduct().NutritionalContents.map((content, index) => (
                  <p key={index}>{content}</p>
                ))
              }
            </div>
          </div>
        </section>
        <section className="w-full pb-[4em]   relative  flex flex-col   ">
          <div className="flex flex-col text-[#1e1e1e] gap-2">
            <h2 className="md:text-[1.375em] text-2xl font-medium">
              Explore more from Lima Africa&apos;s Products
            </h2>
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
                      <Card className="flex border-none  rounded-lg bg-[#013941] p-[1em]  overflow-hidden  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ">
                        <div className="relative flex-1 min-h-[10em]">
                          <Image
                            src={product.img}
                            fill
                            sizes="100vw"
                            alt={product.title}
                            className={"block object-cover img-container"}
                          />
                        </div>
                        <div className="flex flex-col w-full rounded-full items-center   ">
                          <div className="flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal">
                            <div className="flex justify-between relative  items-end  min-h-full z-10 ">
                              <div className="inline-block  w-full  ">
                                <h4 className=" text-[#fff]  tracking-tight relative leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ">
                                  {product.title}
                                </h4>

                                {
                                  //@ts-ignore
                                  product.title === displayedProduct().title ? (
                                    <p className="text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ">{`${productsContent.bsfLive.descriptions}`}</p>
                                  ) : (
                                    <p className="text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ">{`${product.descriptions[0]}`}</p>
                                  )
                                }
                              </div>
                              <ArrowRightCircle
                                color="white"
                                width={18}
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
                    <Card className="flex border-none  rounded-lg bg-[#013941] p-[1em] overflow-hidden  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ">
                      <div className="relative flex-1 min-h-[10em]">
                        <Image
                          src={productsContent.products[0].img}
                          fill
                          sizes="100vw"
                          alt={productsContent.bsfLive.title}
                          className={"block object-cover img-container"}
                        />
                      </div>
                      <div className="flex flex-col w-full rounded-full items-center   ">
                        <div className="flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal">
                          <div className="flex justify-between relative   items-end  min-h-full z-10 ">
                            <div className="inline-block  w-full  ">
                              <h4 className=" text-[#fff]  tracking-tight relative  leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ">
                                {productsContent.bsfLive.title}
                              </h4>
                              <p className="text-[#1e1e1e] lg:backdrop-blur absolute top-50% translate-x-[0%]  translate-y-[100%] left-50%  lg:p-4 w-full overflow-hidden product-desc  lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text  ">{`${productsContent.bsfLive.descriptions}`}</p>
                            </div>
                            <ArrowRightCircle
                              color="white"
                              width={18}
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
