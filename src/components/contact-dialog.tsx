import { useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

interface ContactDialogProps {
  trigger: ReactNode;
  title?: string;
  description?: string;
}

/**
 * Тонкая обёртка над <ContactForm /> — единым источником правды.
 * Любые изменения полей формы — только в `contact-form.tsx`.
 */
export function ContactDialog({
  trigger,
  title = "Обсудить проект",
  description = "Оставьте контакты — свяжемся в течение рабочего дня.",
}: ContactDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium tracking-tight">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          <ContactForm variant="dialog" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
