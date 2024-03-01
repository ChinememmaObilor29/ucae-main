import Link from "next/link";
import Image from "next/image"
import Icon from "../public/img/facebook.png"
import Icon2 from "../public/img/whatsapp.png"
import Icon3 from "../public/img/call.png"

const Navbar = () => {
  const navigation = [
    "",
    "",
    "",
    "",
    "",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="">
            <span className="flex items-center space-x-2 text-2xl font-medium text-blue-400 dark:text-gray-100">
              <span>
                <Image
                  src="/img/WhatsApp Image 2024-02-03 at 19.23.09_1b9b2ddf.jpg.png"
                  alt="N"
                  width="32"
                  height="70"
                  className="w-8"
                />
              </span>
              <span className="spann">UCAE Global Services</span>
            </span>
          </Link>
        </div>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <button className="btn-cssbuttons bg-indigo-400">
            <span>Get Started</span>
            <span>
              <svg
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
                className="icon"
              >
                <path
                  fill="#ffffff"
                  d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
                ></path>
              </svg>
            </span>
            <ul>
            <li>
  <a href="tel:+2348185949268"> {/* Replace +123456789 with the actual phone number */}
    <Image
      src={Icon3}
      width="18"
      height="18"
    />
  </a>
</li>

              <li>
                <a href="https://web.whatsapp.com/send?phone=23408185949269">
                  <Image
                    src={Icon2}
                    width="18"
                    height="18"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    src={Icon}
                    width="18"
                    height="18"
                  />
                </a>
              </li>
            </ul>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
