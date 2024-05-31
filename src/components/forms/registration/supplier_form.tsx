"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { farmerFormContents } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";
import BenedictsDialog from "./_component/dialog_beneficts";

const FormSchema = z.object({
  Name: z.string().min(2),
  ContactInformation: z.string().min(1),
  Location: z.string().min(1),
  Capacity: z.string().min(1),
  Experience: z.string().min(1),
});

const SupplierForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      ContactInformation: "",
      Location: "",
      Capacity: "",
      Experience: "",
    },
  });

  const submitHandler = () => {};

  const isLoading = form.formState.isSubmitting;
  return (
    <div className="flex lg:flex-row flex-col lg:bg-[#f1f7fd] lg:p-6 lg:max-w-[70em] max-w-full lg:gap-12 my-[5em] rounded-lg  ">
      <div className="lg:flex-[0_0_50%] lg:pl-4  w-full lg:flex hidden">
        <div className="flex flex-col gap-4">
          <h3
            className="text-[#1e1e1e] font-medium   block w-full text-xl"
            aria-hidden="true"
          >
            {farmerFormContents.benefitsAccordionTriggerlabel}
          </h3>

          <ul>
            <div className="w-full  leading-[1.5] text-[#1e1e1e] lg:max-w-[500px] overflow-y-auto text-sm flex flex-col gap-4">
              {farmerFormContents.benefits.map((benefit, index) => (
                <div key={index}>
                  <p className="text-[1.25em]">{benefit.label}</p>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="lg:flex-[0_0_50%] flex-[0_0_100%] w-full bg-[#B5D823] flex justify-center items-center rounded-2xl lg:p-10 sm:p-8 p-4 max-lg:!py-[2em]">
        <div className="w-full">
          <Card className="z-10  border-none bg-transparent ">
            <CardHeader className="p-0">
              <p>{farmerFormContents.description}</p>
            </CardHeader>
            <CardContent className="p-0 !pt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submitHandler)}
                  className="space-y-5 w-full "
                >
                  <div className=" flex flex-col space-y-4">
                    <div className="space-y-4 w-full">
                      <div className="grid xmd:grid-cols-2 grid-cols-1 gap-2 w-full items-center justify-between">
                        {farmerFormContents.Fields.twoGrid.map(
                          (item, index) => (
                            <FormField
                              key={index}
                              control={form.control}
                              disabled={isLoading}
                              //@ts-ignore
                              name={item.name}
                              render={({ field }) => (
                                <FormItem className="w-full">
                                  <FormControl>
                                    <Input
                                      placeholder={item.placeholder}
                                      type="text"
                                      {...field}
                                      className="border   placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )
                        )}
                      </div>
                      {farmerFormContents.Fields.cols.map((item, index) => (
                        <FormField
                          key={index}
                          control={form.control}
                          disabled={isLoading}
                          //@ts-ignore
                          name={item.name}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder={item.placeholder}
                                  {...field}
                                  type="text"
                                  className="border placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="text-xs p-4 max-w-[150px] w-full h-0"
                  >
                    {farmerFormContents.submitBtn.label}
                  </Button>
                  <div className="lg:hidden py-4  w-full">
                    <BenedictsDialog
                      btn={farmerFormContents.benefitsAccordionTriggerlabel}
                    >
                      <div className=" w-full overflow-y-auto hide-scrollbar h-[425px]">
                        <div className="p-4">
                          <h3
                            className="text-[#1e1e1e] font-medium  block w-full text-xl"
                            aria-hidden="true"
                          >
                            {farmerFormContents.benefitsAccordionTriggerlabel}
                          </h3>
                          <div className="w-full leading-[1.5] text-[#1e1e1e] text-sm flex flex-col gap-4">
                            {farmerFormContents.benefits.map(
                              (benefit, index) => (
                                <div key={index}>
                                  <p className="text-[1em]">{benefit.label}</p>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </BenedictsDialog>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="text-xs !pt-4 block p-0">
              <div>{farmerFormContents.disclamer.title}</div>
              <div>{farmerFormContents.disclamer.description}</div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupplierForm;
