import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type props = {
  btn: string;
  btnStyles?: string;
  children: React.ReactNode;
};

export default function BenedictsDialog({ btn, btnStyles, children }: props) {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-full ">
        <div className={btnStyles ? "" : "flex justify-center items-center"}>
          <Button
            variant="ghost"
            type="button"
            className={
              btnStyles
                ? btnStyles
                : " bg-transparent text-[1em] shadow-none whitespace-pre-wrap w-full underline underline-offset-2 px-0 hover:bg-transparent "
            }
          >
            {btn}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] m-3 max-xmd:p-2 max-sm:w-full  overflow-y-auto">
        {children}
      </DialogContent>
    </Dialog>
  );
}
