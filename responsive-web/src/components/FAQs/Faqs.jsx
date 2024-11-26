import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaPlus } from "react-icons/fa6";

const Faqs = () => {
  return (
    <div className="bg-transparent max-mobile-3:mx-8 mx-16 my-16 py-10  ">
      <div className="border-gray-600 border p-7 rounded-xl">
        <h1 className="text-4xl font-semibold my-4 text-center border-gray-600">
          <span className="text-yellow-400 "> FAQs</span>
        </h1>
        <div className="flex max-mobile-2:w-full  border-black justify-center items-center">
          <Accordion type="single" collapsible className="text-white max-img:w-full w-1/2">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I get a referral code?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do I get rewarded in tokens or ETH when I refer buyers?
              </AccordionTrigger>
              <AccordionContent>
                You receive your rewards in ETH instantly once someone you refer
                makes a transaction! How do I get a Referral Code?&apos;
                aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I get a Referral Code?</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
