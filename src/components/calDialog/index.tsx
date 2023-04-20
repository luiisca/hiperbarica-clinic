import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/core/button";
import Content from "./content";

export default function CalDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Agendar cita</Button>
      </DialogTrigger>
      <DialogContent>
        <Content />
      </DialogContent>
    </Dialog>
  );
}
