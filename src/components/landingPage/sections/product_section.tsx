import SectionTagHeading from "@/components/global/tags-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { productsContent } from "@/lib/constants";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  return (
    <section
      id="products"
      className="flex justify-center w-full max-w-[2000px]  mx-auto  items-center pt-4 pb-[7.5rem]  flex-col  gap-[1.4em] lg:px-14 md:px-8 px-4"
    >
      <div className="   w-full relative ">
        <div className=" flex xmd:justify-center xmd:items-center flex-col w-full">
          <SectionTagHeading width={"max-w-[14em]"}>
            {productsContent.description}
          </SectionTagHeading>
        </div>
      </div>

      <div className="lg:space-x-5 space-y-5  lg:space-y-0 w-full lg:flex-row flex-col items-center relative flex  whitespace-nowrap">
        {productsContent.products.map((product, index) => (
          <div key={index} className="w-full">
            <Button
              asChild
              className="flex  rounded-lg overflow-hidden  flex-1 h-full xmd:min-h-[400px] min-h-[350px]  relative  flex-col  w-full max-xmd:min-w-[200px] max-sm:min-h-[250px] max-xs:min-w-[150px]   shadow-none hovered p-0"
              variant={"ghost"}
            >
              <Link href={product.link.path}>
                <Card className="flex border-none  rounded-2xl bg-[#ADD63B] overflow-hidden xmd:p-4 max-xmd:py-3  flex-1 h-full z-10  relative  flex-col justify-end  min-w-full  ">
                  <div className="relative flex-1 min-h-[14em]">
                    <Image
                      src={product.img}
                      fill
                      sizes="(min-width: 768px) 50vw, (max-width: 768px) 25vw, 12.5vw"
                      alt={product.title}
                      className={"block object-cover img-container"}
                    />
                  </div>
                  <div className="flex flex-col w-full rounded-full items-center   ">
                    <div className="flex flex-col justify-center    leading-1 space-y-5 w-full  whitespace-normal">
                      <div className="flex justify-between relative !mb-4  px-2 m-3 items-end  min-h-full z-10 ">
                        <div className="inline-block  w-full  ">
                          <h4 className=" text-[#1e1e1e]  tracking-tight relative text-[1.4em] leading-[1.2] max-lg:mb-3 lg:absolute lg:bottom-0 lg:left-0 font-medium product ">
                            {product.title}
                          </h4>
                          <p className="text-[#1e1e1e] lg:backdrop-blur lg:p-4 w-full overflow-hidden product-desc lg:max-w-[40em]  max-w-[25em] lg:hidden block text-ellipsis box-border line-clamp-3 cursor-vertical-text text-[1.125em] ">{`${product.descriptions[0]}`}</p>
                        </div>
                        <ArrowRightCircle
                          color="black"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
