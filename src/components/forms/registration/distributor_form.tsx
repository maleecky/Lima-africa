"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { distributorFormContents } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Reveal from "@/components/global/reveal";

const BenedictsDialog = dynamic(() => import("./_component/dialog_beneficts"));

const FormSchema = z.object({
  Name: z.string().min(2),
  ContactInformation: z.string().min(1),
  BusinessName: z.string().min(1),
  Location: z.string().min(1),
  Capacity: z.string().min(1),
  Experience: z.string().min(1),
});

const DistributorForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      ContactInformation: "",
      BusinessName: "",
      Location: "",
      Capacity: "",
      Experience: "",
    },
  });

  const submitHandler = () => {
    toast({
      title: "Success",
      description: "The message is sent",
    });
    form.reset();
    router.refresh();
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <div className="flex lg:p-6 lg:max-w-[70em] max-w-full lg:gap-12 mt-[4em] rounded-2xl  ">
      <div className=" px-6 !py-[2em] bg-[#3D5C30] rounded-2xl w-full min-[950px]:flex hidden">
        <div
          className="flex flex-col gap-10
        "
        >
          <Reveal>
            <h3
              className="text-[#fff] font-medium  block w-full text-xl"
              aria-hidden="true"
            >
              {distributorFormContents.benefitsAccordionTriggerlabel}
            </h3>
          </Reveal>
          <ul>
            <div className="w-full  leading-[1.5] text-[#fff] lg:max-w-[500px]  overflow-y-auto text-sm flex flex-col gap-4">
              {distributorFormContents.benefits.map((benefit, index) => (
                <Reveal key={index}>
                  <p className="lg:text-[1.25em] text-[1.125em] ">
                    {benefit.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center  rounded-2xl  ">
        <div className="w-full ">
          <Card className="z-10 w-full p-6  max-[950px]:border border-none max-[950px]:shadow shadow-none  bg-transparent ">
            <Reveal styles="p-0 mb-5  text-[#1e1e1e]  ">
              <p className=" text-[1.125em] lg:text-medium leading-[1.3]">
                {distributorFormContents.description}{" "}
              </p>
            </Reveal>
            <Reveal styles="min-[950px]:hidden !mb-[2em]  w-full">
              <BenedictsDialog
                btn={distributorFormContents.benefitsAccordionTriggerlabel}
              >
                <div className="w-full overflow-y-auto hide-scrollbar h-[425px]">
                  <div className="p-4 ">
                    <h3
                      className="text-[#1e1e1e] font-semibold  block w-full "
                      aria-hidden="true"
                    >
                      {distributorFormContents.benefitsAccordionTriggerlabel}
                    </h3>
                    <div className="w-full leading-[1.5] text-[#1e1e1e] flex flex-col gap-2">
                      {distributorFormContents.benefits.map(
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
            </Reveal>
            <CardContent className="p-0 !pt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submitHandler)}
                  className="space-y-5 w-full "
                >
                  <div className=" flex flex-col w-full justify-center space-y-4">
                    <div className="space-y-8 w-full">
                      <div className="grid xmd:grid-cols-2 grid-cols-1 gap-8 w-full justify-between">
                        {distributorFormContents.Fields.gridTwo.map(
                          (item, index) => (
                            <FormField
                              key={index}
                              control={form.control}
                              disabled={isLoading}
                              //@ts-ignore
                              name={item.name}
                              render={({ field }) => (
                                <FormItem className="w-full flex flex-col gap-[2px] relative">
                                  <FormLabel className=" [min-950px]:w-max flex items-start justify-start w-full  p-0">
                                    <p className="text-left">
                                      {item.placeholder}{" "}
                                      {item.required && (
                                        <span className="text-red-800">*</span>
                                      )}
                                    </p>
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      {...field}
                                      className="border focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          )
                        )}
                      </div>
                      {distributorFormContents.Fields.cols.map(
                        (item, index) => (
                          <FormField
                            key={index}
                            control={form.control}
                            disabled={isLoading}
                            //@ts-ignore
                            name={item.name}
                            render={({ field }) => (
                              <FormItem className="w-full flex flex-col gap-[2px] relative">
                                <FormLabel className=" [min-950px]:w-max flex items-start justify-start w-full  p-0">
                                  <p className="text-left">
                                    {item.placeholder}
                                    {item.required && (
                                      <span className="text-red-800">*</span>
                                    )}
                                  </p>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="text"
                                    className="border focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <Button
                    className=" px-4 !mt-[4em]  bg-[#022F35] xmd:max-w-[200px] w-full "
                    type="submit"
                  >
                    {distributorFormContents.submitBtn.label}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DistributorForm;
