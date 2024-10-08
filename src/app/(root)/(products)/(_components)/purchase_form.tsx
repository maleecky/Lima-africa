"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { SendMail } from "@/lib/sending-mail.";

const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().min(1),
  quantity: z.coerce.number().min(1).max(9999).int(),
  product: z.string().optional(),
});

type Props = {
  displayedProduct: () => void;
};
const PurchaseForm = ({ displayedProduct }: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      quantity: 0,
      //@ts-ignore
      product: displayedProduct()?.title,
    },
  });

  const onSubmit: SubmitHandler<{
    name: string;
    email: string;
    quantity: number;
    product?: string;
  }> = (data) => {
    //@ts-ignore
    const formdata = { ...data, product: displayedProduct().title };
    const message = `I am inquiring for ${formdata.quantity}kg of ${formdata.product}`;

    const templateParams = {
      from_name: formdata.name,
      message: message,
      from_email: formdata.email,
      reply_to: formdata.email,
    };

    SendMail({ templateParams })
      .then((response) => {
        console.log(response);
        if (response)
          toast({
            title: "Success",
            description: "Inquire has been sent",
          });

        router.refresh();
      })
      .catch((error) => {
        if (error)
          toast({
            variant: "destructive",
            title: "Failed",
            description: "Failed to send a message",
          });
      });
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="p-6 ">
      <h3 className="lg:max-w-[15em] py-3 w-full text-[1.5em] leading-[1.1] font-medium">
        Fill the Form to inquire the Product
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full "
        >
          <FormField
            control={form.control}
            disabled={isLoading}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className=" [min-950px]:w-max flex items-start justify-start w-full  p-0">
                  <p className="text-left">
                    Fullname
                    <span className="text-red-800">*</span>
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="border placeholder:text-[13px]  border-[#4a704165]   focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                <FormLabel className=" [min-950px]:w-max flex items-start justify-start w-full  p-0">
                  <p className="text-left">
                    Email
                    <span className="text-red-800">*</span>
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="border placeholder:text-[13px]  border-[#4a704165]   focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                <FormLabel className=" [min-950px]:w-max flex items-start justify-start w-full  p-0">
                  <p className="text-left">
                    How many kilos you want
                    <span className="text-red-800">*</span>
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    className="border placeholder:text-[13px] border-[#4a704165]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                <FormLabel className=" [min-950px]:w-max flex items-start justify-start w-full  p-0">
                  <p className="text-left">
                    Product
                    <span className="text-red-800">*</span>
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    defaultValue={
                      //@ts-ignore
                      displayedProduct().title
                    }
                    type="text"
                    readOnly
                    className="border placeholder:text-[13px] border-[#4a704165] focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className=" px-4 bg-[#3D5C30] max-w-[200px] w-full "
            type="submit"
          >
            Inquire via Email
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PurchaseForm;
