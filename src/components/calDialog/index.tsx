import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button, ButtonBaseProps } from "../ui/core/button";
import Content from "./content";

export default function CalDialog(
  props: React.HTMLAttributes<HTMLButtonElement> & ButtonBaseProps
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props}>Agendar cita</Button>
      </DialogTrigger>
      <DialogContent>
        <Content />
      </DialogContent>
    </Dialog>
  );
}
