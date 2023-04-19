import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/core/button";
import Content from "./content";

export default function CalDialog({
  triggerMsg = "Agendar cita gratuita",
}: {
  triggerMsg?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{triggerMsg}</Button>
      </DialogTrigger>
      <DialogContent>
        <Content />
      </DialogContent>
    </Dialog>
  );
}
