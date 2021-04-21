import {
  GlobeAltIcon,
  LightningBoltIcon,
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

export default function Commercial() {
  return (
    <div className="mt-2 pb-12">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:pb-12 lg:pt-0 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div className=" w-full ">
              <h3 className="text-2xl font-extrabold text-dark-white tracking-tight sm:text-3xl">
                Commercial Cleaning
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our commercial service begins with an appraisal of the job and a
                detailed pricing. A member of our team will visit your business
                to speak to you in person. Call us today for an estimate.
              </p>

              <dl className="mt-4 space-y-5 ">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-sm bg-dark-gold text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-dark-white">
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
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 ">
          <div className=" lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex justify-center lg:px-2">
            <Image
              className="w-full h-64 object-cover  md:rounded-sm shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute  lg:h-full lg:w-full lg:max-w-none"
              src="/images/commercial.jpg"
              alt="residential Carpet Cleaning"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
