// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { Button } from "../ui/button";
// import { contactFormContents } from "@/lib/constants";
// import { Checkbox } from "../ui/checkbox";
// import clsx from "clsx";

// const FormSchema = z.object({
//   fullName: z
//     .string({
//       required_error: { message: "Please fill this field" },
//     })
//     .min(2, {
//       message: "Fill your full name, a minimum of 2 characters is required",
//     }),
//   phone: z
//     .string({
//       required_error: "Please fill this field",
//     })
//     .min(10, { message: "The phone number must have at least 10 characters" }),
//   email: z.string().email(),
//   address: z.string(),
//   socialLinks: z.string(),
//   message: z
//     .string({
//       required_error: "Please fill this field",
//     })
//     .min(1),
//   contactAgreement: z
//     .boolean({
//       required_error: { message: "Please check the box" },
//     })
//     .default(false),
// });

// type FormSchemaType = z.infer<typeof FormSchema>;

// type Props = {
//   hideCss?: string;
// };

// const ContactForm = ({ hideCss }: Props) => {
//   const form = useForm<FormSchemaType>({
//     mode: "onChange",
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       fullName: "",
//       phone: "",
//       email: "",
//       address: "",
//       socialLinks: "",
//       message: "",
//       contactAgreement: false,
//     },
//   });

//   const submitHandler = () => {};

//   const isLoading = form.formState.isSubmitting;

//   return (
//     <Card
//       className={clsx(
//         "z-10 w-full lg:flex-1 hidden sm:max-w-[550px] max-[198px]:min-w-[150px] lg:flex flex-col lg:items-start space-y-5 mx-auto border-0 shadow-none bg-transparent",
//         {
//           "lg:flex hidden": !hideCss,
//           "max-lg:!flex": hideCss,
//         }
//       )}
//     >
//       <CardContent className="p-0 w-full">
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(submitHandler)}
//             className="space-y-5 w-full"
//           >
//             <div className="flex flex-col space-y-4">
//               <div className="space-y-8">
//                 <div className="flex sm:flex-row flex-col gap-6 w-full items-start">
//                   {contactFormContents.fields.twoRows.map(
//                     (fieldItem, index) => (
//                       <FormField<FormSchemaType>
//                         key={index}
//                         control={form.control}
//                         name={fieldItem.name as keyof FormSchemaType}
//                         render={({ field }) => (
//                           <FormItem className="flex-1">
//                             <FormLabel className="w-max p-0">
//                               {fieldItem.placeholder}
//                               {fieldItem.required && (
//                                 <span className="text-red-800">*</span>
//                               )}
//                             </FormLabel>
//                             <FormControl>
//                               <Input
//                                 type={fieldItem.type}
//                                 {...field}
//                                 className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     )
//                   )}
//                 </div>
//                 <div className="flex sm:flex-row flex-col gap-6 w-full items-start">
//                   {contactFormContents.fields.twoRows2.map(
//                     (fieldItem, index) => (
//                       <FormField<FormSchemaType>
//                         key={index}
//                         control={form.control}
//                         name={fieldItem.name as keyof FormSchemaType}
//                         render={({ field }) => (
//                           <FormItem className="flex-1">
//                             <FormLabel className="w-max p-0">
//                               {fieldItem.placeholder}
//                               {fieldItem.required && (
//                                 <span className="text-red-800">*</span>
//                               )}
//                             </FormLabel>
//                             <FormControl>
//                               <Input
//                                 type={fieldItem.type}
//                                 {...field}
//                                 className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
//                               />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )}
//                       />
//                     )
//                   )}
//                 </div>
//                 {contactFormContents.fields.cols.map((fieldItem, index) => (
//                   <FormField<FormSchemaType>
//                     key={index}
//                     control={form.control}
//                     name={fieldItem.name as keyof FormSchemaType}
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="w-max p-0">
//                           {fieldItem.placeholder}
//                           {fieldItem.required && (
//                             <span className="text-red-800">*</span>
//                           )}
//                         </FormLabel>
//                         <FormControl>
//                           {fieldItem.controller !== "input" ? (
//                             <Textarea
//                               {...field}
//                               className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
//                             />
//                           ) : (
//                             <Input
//                               type={fieldItem.type}
//                               {...field}
//                               className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
//                             />
//                           )}
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <FormField<FormSchemaType>
//                 control={form.control}
//                 name="contactAgreement"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col  gap-2">
//                     <FormDescription>
//                       Lima is committed to protecting and respecting your
//                       privacy. We use your personal data to respond to your
//                       contact requests.
//                     </FormDescription>
//                     <div className="items-center flex leading-none">
//                       <FormControl>
//                         <Checkbox
//                           checked={field.value}
//                           onCheckedChange={field.onChange}
//                         />
//                       </FormControl>
//                       <FormLabel>
//                         I&apos;ve read and understood Lima&apos;s Privacy
//                         Policy.
//                         <span className="text-red-800">*</span>
//                       </FormLabel>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="flex w-full pt-8">
//               <Button
//                 className="bg-[#013941] lg:hover:bg-green-800"
//                 type="submit"
//               >
//                 {contactFormContents.submitBtn.label}
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };

// export default ContactForm;

"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input, InputProps } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { contactFormContents } from "@/lib/constants";
import { Checkbox } from "../ui/checkbox";
import clsx from "clsx";
import { toast } from "../ui/use-toast";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Fill your full name, a minimum of 2 characters is required",
  }),
  phone: z
    .string()
    .min(10, { message: "The phone number must have at least 10 characters" }),
  email: z.string().email(),
  address: z.string().min(1),
  socialLinks: z.string().min(1),
  message: z.string().min(1),
  contactAgreement: z.boolean().default(false),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type Props = {
  hideCss?: string;
};

const ContactForm = ({ hideCss }: Props) => {
  const form = useForm<FormSchemaType>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      socialLinks: "",
      message: "",
      contactAgreement: false,
    },
  });

  const submitHandler = () => {
    redirect("/");
    toast({
      title: "Success",
      description: "The message is sent",
    });
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Card
      className={clsx(
        "z-10 w-full lg:flex-1 hidden sm:max-w-[550px] max-[198px]:min-w-[150px] lg:flex flex-col lg:items-start space-y-5 mx-auto border-0 shadow-none bg-transparent",
        {
          "lg:flex hidden": !hideCss,
          "max-lg:!flex": hideCss,
        }
      )}
    >
      <CardContent className="p-0 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-5 w-full"
          >
            <div className="flex flex-col space-y-4">
              <div className="space-y-8">
                <div className="flex sm:flex-row flex-col gap-6 w-full items-start">
                  {contactFormContents.fields.twoRows.map(
                    (fieldItem, index) => (
                      <FormField<FormSchemaType>
                        key={index}
                        control={form.control}
                        name={fieldItem.name as keyof FormSchemaType}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel className="w-max p-0">
                              {fieldItem.placeholder}
                              {fieldItem.required && (
                                <span className="text-red-800">*</span>
                              )}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type={fieldItem.type}
                                {...field}
                                value={
                                  field.value as
                                    | string
                                    | number
                                    | readonly string[]
                                    | undefined
                                }
                                className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )
                  )}
                </div>
                <div className="flex sm:flex-row flex-col gap-6 w-full items-start">
                  {contactFormContents.fields.twoRows2.map(
                    (fieldItem, index) => (
                      <FormField<FormSchemaType>
                        key={index}
                        control={form.control}
                        name={fieldItem.name as keyof FormSchemaType}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel className="w-max p-0">
                              {fieldItem.placeholder}
                              {fieldItem.required && (
                                <span className="text-red-800">*</span>
                              )}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type={fieldItem.type}
                                {...field}
                                value={
                                  field.value as
                                    | string
                                    | number
                                    | readonly string[]
                                    | undefined
                                }
                                className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )
                  )}
                </div>
                {contactFormContents.fields.cols.map((fieldItem, index) => (
                  <FormField<FormSchemaType>
                    key={index}
                    control={form.control}
                    name={fieldItem.name as keyof FormSchemaType}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="w-max p-0">
                          {fieldItem.placeholder}
                          {fieldItem.required && (
                            <span className="text-red-800">*</span>
                          )}
                        </FormLabel>
                        <FormControl>
                          {fieldItem.controller !== "input" ? (
                            <Textarea
                              {...field}
                              value={field.value as string}
                              className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                            />
                          ) : (
                            <Input
                              type={fieldItem.type}
                              {...field}
                              value={
                                field.value as
                                  | string
                                  | number
                                  | readonly string[]
                                  | undefined
                              }
                              className="border border-[#0C3623]/10 rounded focus:outline-none p-[1.4rem] bg-[#f1fefd] focus-visible:ring-0 focus-visible:ring-sky-600 focus:border-sky-600"
                            />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <FormField<FormSchemaType>
                control={form.control}
                name="contactAgreement"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormDescription>
                      Lima is committed to protecting and respecting your
                      privacy. We use your personal data to respond to your
                      contact requests.
                    </FormDescription>
                    <div className="flex items-center gap-2 leading-none">
                      <FormControl>
                        <Checkbox
                          checked={field.value as boolean}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>
                        I&apos;ve read and understood Lima&apos;s Privacy
                        Policy.
                        <span className="text-red-800">*</span>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full pt-8">
              <Button
                className="bg-[#013941] lg:hover:bg-green-800"
                type="submit"
              >
                {isLoading
                  ? "Sending ..."
                  : contactFormContents.submitBtn.label}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
