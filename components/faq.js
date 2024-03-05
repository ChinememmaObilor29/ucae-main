import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-50 dark:text-gray-800">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-400`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does your Business Center/Cyber cafe offer?",
    answer: "Our Business Center/Cyber cafe offers a range of services including Online Registration, printing, Grpahics Design, photocopying, computer training, and other computer services.",
  },
  {
    question: "Do you offer printing and scanning services?",
    answer: "Yes, we provide printing and scanning services for both black and white and color documents. We also offer scanning to email or USB drive options for your convenience.",
  },
  {
    question: "Do you have any privacy measures in place for users?",
    answer:
      "Yes, we prioritize the privacy and security of our customers. Our network is protected with advanced encryption protocols, and we do not store any personal data from our users' browsing activities.",
  },
  {
    question: "Do you provide technical assistance?",
    answer:
      "Yes, our staff are trained to provide technical support and assistance with any issues you may encounter during your visit. Don't hesitate to ask for help if you need it.",
  },
];

export default Faq;
