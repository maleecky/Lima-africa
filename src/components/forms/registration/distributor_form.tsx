"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { distributorFormContents } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import dynamic from "next/dynamic";

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

  const submitHandler = () => {};

  const isLoading = form.formState.isSubmitting;
  return (
    <div className="flex lg:flex-row flex-col lg:bg-[#f1f7fd] lg:p-6 lg:max-w-[70em] max-w-full lg:gap-12 my-[5em] rounded-2xl  ">
      <div className="lg:flex-[0_0_50%] lg:pl-4  w-full lg:flex hidden">
        <div className="flex flex-col gap-4">
          <h3
            className="text-[#1e1e1e] font-medium   block w-full text-xl"
            aria-hidden="true"
          >
            {distributorFormContents.benefitsAccordionTriggerlabel}
          </h3>
          <ul>
            <div className="w-full  leading-[1.5] text-[#1e1e1e] lg:max-w-[500px]  overflow-y-auto text-sm flex flex-col gap-4">
              {distributorFormContents.benefits.map((benefit, index) => (
                <div key={index}>
                  <p className="lg:text-[1.25em] text-[1.125em] ">
                    {benefit.label}
                  </p>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="lg:flex-[0_0_50%] flex-[0_0_100%] w-full bg-[#B5D823] flex justify-center items-center rounded-2xl lg:p-10 sm:p-8 p-4 max-lg:!py-[2em]">
        <div className="w-full">
          <Card className="z-10  border-none bg-transparent ">
            <CardHeader className="p-0  text-[#1e1e1e]  ">
              <h3 className="lg:hidden block text-xl  max-lg:text-center font-semibold">
                {distributorFormContents.formAccordionTriggerlabel}
              </h3>
              <p className="max-lg:pt-4 text-[1.125em] lg:text-medium leading-[1.3]">
                {distributorFormContents.description}
              </p>
            </CardHeader>
            <CardContent className="p-0 !pt-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submitHandler)}
                  className="space-y-5 w-full "
                >
                  <div className=" flex flex-col w-full  justify-center items-center space-y-4">
                    <div className="space-y-4 w-full">
                      <div className="grid xlg:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-2 w-full items-center justify-between">
                        {distributorFormContents.Fields.threeGrid.map(
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
                                      className="border placeholder:text-[13px]  border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                              <FormItem>
                                <FormControl>
                                  <Input
                                    placeholder={item.placeholder}
                                    {...field}
                                    type="text"
                                    className="border placeholder:text-[13px] border-[#4a704165] bg-[#C6E156]  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                    className=" px-4 bg-[#022F35] max-w-[200px] w-full "
                    type="submit"
                  >
                    {distributorFormContents.submitBtn.label}
                  </Button>
                  <div className="lg:hidden  w-full">
                    <BenedictsDialog
                      btn={
                        distributorFormContents.benefitsAccordionTriggerlabel
                      }
                    >
                      <div className="w-full overflow-y-auto hide-scrollbar h-[425px]">
                        <div className="p-4 ">
                          <h3
                            className="text-[#1e1e1e] font-semibold  block w-full text-xl"
                            aria-hidden="true"
                          >
                            {
                              distributorFormContents.benefitsAccordionTriggerlabel
                            }
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
                  </div>
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
