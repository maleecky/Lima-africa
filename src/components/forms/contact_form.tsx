"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { contactFormContents } from "@/lib/constants";

const FormSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "The phone number must have atleast 10 characters" }),
  email: z.string().email(),
  address: z.string().min(1),
  socialLinks: z.string().min(1),
  message: z.string().min(1),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      email: "",
      address: "",
      socialLinks: "",
      message: "",
    },
  });

  const submitHandler = () => {};

  const isLoading = form.formState.isSubmitting;
  return (
    <Card className="z-10 w-full sm:max-w-[600px] max-[198px]:min-w-[150px] flex flex-col items-center lg:items-start  space-y-5 mx-auto  border-0 shadow-none bg-transparent">
      <CardHeader className="font-medium p-0 lg:text-left w-full lg:text-3xl text-xl max-w-[250px]">
        {contactFormContents.formLabel}
      </CardHeader>
      <CardContent className=" p-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-5 w-full "
          >
            <div className=" flex flex-col space-y-4 ">
              <div className="space-y-4">
                <div className="sm:flex block space-y-4 sm:space-y-0 w-full items-start sm:space-x-4">
                  {contactFormContents.fields.twoRows.map(
                    (fieldItem, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        disabled={isLoading}
                        //@ts-ignore
                        name={fieldItem.name}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder={fieldItem.placeholder}
                                type={fieldItem.type}
                                {...field}
                                className="border border-[#0C3623]/60 focus:outline-none p-[1.4rem] bg-transparent rounded-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )
                  )}
                </div>
                {contactFormContents.fields.threeCols.map(
                  (fieldItem, index) => {
                    if (fieldItem.controller !== "input") {
                      return (
                        <FormField
                          key={index}
                          control={form.control}
                          disabled={isLoading}
                          //@ts-ignore
                          name={fieldItem.name}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea
                                  placeholder={fieldItem.placeholder}
                                  {...field}
                                  className="border border-[#0C3623]/60 bg-transparent focus:outline-none p-[1.4rem] rounded-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    }
                    return (
                      <FormField
                        key={index}
                        control={form.control}
                        disabled={isLoading}
                        //@ts-ignore
                        name={fieldItem.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                type={fieldItem.type}
                                placeholder={fieldItem.placeholder}
                                {...field}
                                className="border border-[#0C3623]/60 bg-transparent focus:outline-none p-[1.4rem] rounded-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex w-full lg:justify-start justify-center">
              <Button
                className="bg-[#0C3623] hover:bg-[#0c3623]/90"
                type="submit"
              >
                {contactFormContents.submitBtn.label}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
