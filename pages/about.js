import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { CursorArrowRaysIcon, BookmarkIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
  const navigation = [
    { label: "Home", href: "/" },
    { label: "Contact Support", href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-blue-400 dark:text-gray-100 cursor-pointer">
              <span>
                <Image
                  src="/img/WhatsApp Image 2024-02-03 at 19.23.09_1b9b2ddf.jpg.png"
                  alt="N"
                  width={32}
                  height={70}
                  className="w-8"
                />
              </span>
              <span className="spann">UCAE Global Services</span>
            </span>
          </Link>
          {/* Burger Menu Icon */}
          <div className="block lg:hidden mt-2">
            <button onClick={toggleMobileMenu} className="text-gray-600 dark:text-gray-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="w-full lg:hidden">
            <ul className="flex flex-col items-center py-4">
              {navigation.map((menuItem, index) => (
                <li key={index} className="mb-4">
                  <Link href={menuItem.href}>
                    <span className="text-lg text-gray-800 dark:text-gray-800 hover:text-indigo-500 dark:hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 cursor-pointer">
                      {menuItem.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menuItem, index) => (
              <li className="mr-2 nav__item" key={index}>
                <Link href={menuItem.href}>
                  <span className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-800 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 cursor-pointer">
                    {menuItem.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const features = [
  {
    name: 'Provide Accessible and Reliable Internet Services:',
    description:
      'We aim to offer accessible and reliable internet services to their customers. This involves providing high-speed internet connectivity for browsing and other online activities.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Promote Digital Literacy and Skill Development:',
    description: 'We help in promoting digital literacy and skill development among their customers. Through workshops, training sessions, and educational programs, cyber cafes can help individuals improve their computer proficiency, learn new software applications, .',
    icon: BookmarkIcon,
  },
  {
    name: 'Support Remote Work and Productivity:',
    description: 'We Offer a conducive environment for remote work by providing reliable internet connectivity, comfortable workspaces, and access to productivity tools and software.',
    icon: ComputerDesktopIcon,
  },
];

export default function Example() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-40">
        <p className="text-base font-semibold text-indigo-600"></p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">About Us</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">UCAE Global Services is a versatile and modern <br></br> facility that combines the convenience of a traditional business <br></br> center with the amenities of a Cybercafe.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a href="/contact" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      

      <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">UCAE</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our History and Mission</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              UCAE Cyber Cafe is dedicated to providing a cutting-edge and immersive cyber experience for individuals seeking a blend of social interaction and digital entertainment. Our mission is to create a dynamic environment.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
  src="/img/1.jpg"
  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
  width={2432}
  height={1442}
/>

        </div>
      </div>
    </div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Address.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              
Located at a convenient spot in the heart of the city, UCAE Global Services boasts a prime address, easily accessible to customers from all corners.Our establishment is strategically positioned to cater to the needs of both local residents and visitors alike.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                We are always available every week for business.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Location</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    </>
  );
}
