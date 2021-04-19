import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import Image from "next/image";

const transferFeatures = [
  {
    id: 1,
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
];

export default function Services() {
  return (
    <div className="relative">
      <div>
        <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-dark-white sm:text-4xl">
          What We Offer
        </h2>
        <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 px-4">
          Soho Carpet Cleaning offers a Range of Different Serivices including
          Residential and Commercial Cleaning, plus Carpet Repairs done with
          outmost care and delicasy!
        </p>
      </div>
      <div className="relative  pt-16 pb-8 overflow-hidden">
        <div className="relative ">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-12">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:pb-12 lg:pt-0 lg:max-w-none lg:mx-0 lg:px-0 ">
              <div className=" w-full ">
                <h3 className="text-2xl font-extrabold text-dark-white tracking-tight sm:text-3xl">
                  Residential Cleaning
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur minima sequi recusandae, porro maiores officia
                  assumenda aliquam laborum ab aliquid veritatis impedit odit
                  adipisci optio iste blanditiis facere. Totam, velit.
                </p>

                <dl className="mt-4 space-y-5 ">
                  {transferFeatures.map((item) => (
                    <div key={item.id} className="">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-dark-gold text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-white">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-400">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 ">
              <div className=" lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex justify-center ">
                <img
                  className="w-full h-64 object-cover  md:rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute  lg:h-full lg:w-full lg:max-w-none"
                  src="/images/residential.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
