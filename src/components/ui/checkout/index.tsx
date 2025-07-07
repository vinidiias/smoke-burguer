"use client";
import { zodResolver } from '@hookform/resolvers/zod'
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../sheet";
import { openCheckoutAtom } from "@/atoms/openCheckoutAtom";
import { useCallback, useState } from "react";
import { IFormValues } from "@/types/form";
import { orderSchem } from "@/schema/orderSchema";
import { Form } from "../form";
import { TabsCheckout } from './tabsCheckout';
import { FooterCheckout } from './footerCheckout';

export interface Props {
  currentPage: number
  nextPage?: () => void
  previousPage?: () => void
  onClose?: () => void
}

export const Checkout = () => {
  const [open, setOpen] = useAtom<boolean>(openCheckoutAtom);
  const [currentPage, setCurrentPage] = useState<number>(0)
  const methods = useForm<IFormValues>({
    resolver: zodResolver(orderSchem),
    defaultValues: {
      description: '',
      payment: '',
      address: ''
    }
  })

  const nextPage = useCallback(
    () => setCurrentPage((prevPage) => prevPage + 1),
    []
  );
  const previousPage = useCallback(
    () => setCurrentPage((prevPage) => prevPage - 1),
    []
  );
  const onClose = useCallback(() => setOpen(true), [setOpen]);

  return (
    <Form {...methods}>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
      <SheetContent className="max-sm:w-full">
        <SheetHeader>
          <SheetTitle className="text-lg">Seu Carrinho</SheetTitle>
        </SheetHeader>
        <div className="h-full px-4 overflow-y-auto scrollbar">
          <TabsCheckout currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} />
        </div>
        <SheetFooter className="">
          <FooterCheckout currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} onClose={onClose} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </Form>
  );
};
