import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  WifiIcon,
  PaintBrushIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/20943991.jpg";
import benefitTwoImg from "../public/img/5757169_2965738.jpg";

const benefitOne = {
  title: "Our Services",
  desc: "Visit UCAE Global Services to learn more about individualized office solutions and committed administrative assistance. Our professional amenities and flexible lease options can help you elevate your business.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Result Checking",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Computer Training",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "Online Registration",
      icon: <WifiIcon />,
    },
    {
      title: "Graphic Design",
      icon: <PaintBrushIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More of Our Services",
  desc: "Explore UCAE Global Services for personalized office solutions and professional support. We're here to help you achieve your business goals with flexible leases and premium amenities.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Project Writing",
      icon: <DocumentTextIcon />,
    },
    {
      title: "Laptop/Phone Repairs",
      icon: <Cog6ToothIcon />,
    },
    {
      title: "Remita Payment",
      icon: <DocumentIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
