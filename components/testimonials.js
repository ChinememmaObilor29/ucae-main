import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/9678556.jpg";
import userTwoImg from "../public/img/hand-holding-passport-new-normal-travel.jpg";
import userThreeImg from "../public/img/social-media-marketing-concept-marketing-with-applications.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-100">
            <p className="text-2xl leading-normal ">
            Explore our Professional <Mark>Printing</Mark>Services for Crisp, Clear, and Convenient Results
            </p>

            <Avatar
              image={userOneImg}
              name="Printing"
              title="Services"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-100">
            <p className="text-2xl leading-normal ">
            Seamlessly Navigate <Mark>Passport</Mark>Services with Our Dedicated Support!
            </p>

            <Avatar
              image={userTwoImg}
              name="Passport"
              title="Services"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-gray-100">
            <p className="text-2xl leading-normal ">
            Access Hassle-Free Online <Mark>Application</Mark>Services with Ease and Efficiency!
            </p>

            <Avatar
              image={userThreeImg}
              name="Online Applications"
              title="Services"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-600">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
