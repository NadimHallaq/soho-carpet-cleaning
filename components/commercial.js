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
    <div className="mt-4 sm:mt-16 pb-12">
      <div className="mx-auto max-w-7xl lg:px-2 grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col-dense gap-4">
        <div className="px-4  sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 sm:col-start-2 ">
          <div className=" w-full ">
            <h3 className="text-2xl font-extrabold text-dark-white tracking-tight sm:text-3xl">
              Commercial Cleaning
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Our commercial service begins with an appraisal of the job and a
              detailed pricing. A member of our team will visit your business to
              speak to you in person. Call us today for an estimate.
            </p>

            <dl className="mt-4 space-y-5 ">
              {transferFeatures.map((item) => (
                <div key={item.id}>
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

        <div className="h-64 md:h-full w-full ">
          <div className="relative w-full h-full ">
            <Image
              className="shadow-xl rounded-sm "
              alt="Commercial Carpet Cleaning"
              src="/images/commercial.jpg"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
