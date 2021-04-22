import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <main className="mt-16 mx-auto max-w-7xl px-2 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline font-extrabold text-dark-white">
              Luxury Carpet Cleaning <br />
            </span>

            <span className="block text-dark-gold xl:inline lg:font-extrabold">
              {" "}
              and Beyond
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </main>
      <div className="relative sm:mt-12 mt-4 mb-12">
        <div className="absolute inset-x-0 bottom-0 "></div>
        <div className="max-w-7xl mx-auto ">
          <div className="relative shadow-xl sm:overflow-hidden h-96">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="/hero.jpg"
                alt="Luxury Oriental Carpet Photo"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-dark-blue opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
