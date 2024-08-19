"use client";

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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { farmerFormContents } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import BenedictsDialog from "./_component/dialog_beneficts";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import Reveal from "@/components/global/reveal";
import { SendMail } from "@/lib/sending-mail.";

const FormSchema = z.object({
  Name: z.string().min(2),
  ContactInformation: z.string().min(1),
  Location: z.string().min(1),
  Capacity: z.coerce.number().min(1),
  Experience: z.coerce.number(),
});

const SupplierForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name: "",
      ContactInformation: "",
      Location: "",
      Capacity: 0,
      Experience: 0,
    },
  });

  const submitHandler: SubmitHandler<{
    Name: string;
    ContactInformation: string;
    Location: string;
    Capacity: number;
    Experience: number;
  }> = (data) => {
    const message = `we would love to become a outgrower of lima's product our experience in agricultural business is ${data.Experience} years,\n we are located at ${data.Location}, \nif we had been given a chance, we can outgrow a lima's product to a  capacity of ${data.Capacity} kg `;
    const templateParams = {
      from_name: data.Name,
      message: message,
      from_email: data.ContactInformation,
      reply_to: data.ContactInformation,
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
    <div className="flex lg:p-6 lg:max-w-[70em] max-w-full lg:gap-12 mt-[4em] rounded-2xl  ">
      <div className=" px-6 !py-[2em] bg-[#0C3623] rounded-2xl w-full min-[950px]:flex hidden">
        <div className="flex flex-col gap-10">
          <Reveal>
            <h3
              className="text-[#fff] font-medium   block w-full text-xl"
              aria-hidden="true"
            >
              {farmerFormContents.benefitsAccordionTriggerlabel}
            </h3>
          </Reveal>

          <ul>
            <div className="w-full  leading-[1.5] text-[#fff] lg:max-w-[500px] overflow-y-auto text-sm flex flex-col gap-4">
              {farmerFormContents.benefits.map((benefit, index) => (
                <div key={index}>
                  <Reveal>
                    <p className="lg:text-[1.25em] text-[1.125em]">
                      {benefit.label}
                    </p>
                  </Reveal>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center  rounded-2xl">
        <div className="w-full">
          <Card className="z-10  max-[950px]:border border-none max-[950px]:shadow shadow-none p-6  bg-transparent ">
            <CardHeader className="p-0 mb-5 text-[#1e1e1e]">
              <p className=" text-[1.125em] lg:text-medium leading-[1.3]">
                {farmerFormContents.description}
              </p>
              <div className="min-[950px]:hidden !mt-[2em]  w-full">
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
                        {farmerFormContents.benefits.map((benefit, index) => (
                          <div key={index}>
                            <p className="text-[1em]">{benefit.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </BenedictsDialog>
              </div>
            </CardHeader>
            <CardContent className="p-0 !pt-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submitHandler)}
                  className="space-y-5 w-full "
                >
                  <div className=" flex flex-col w-full justify-center space-y-4">
                    <div className="space-y-8 w-full">
                      <div className="grid xmd:grid-cols-2 place-items-center grid-cols-1 gap-10 w-full items-center justify-between">
                        {farmerFormContents.Fields.twoGrid.map(
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
                                      type={item.type}
                                      {...field}
                                      className="border placeholder:text-[13px] focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                                  placeholder={item.placeholder}
                                  {...field}
                                  type={item.type}
                                  className="border  focus:outline-none focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
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
                    className=" px-4 !mt-[4em]  bg-[#022F35] xmd:max-w-[200px] w-full "
                  >
                    {farmerFormContents.submitBtn.label}
                  </Button>
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
