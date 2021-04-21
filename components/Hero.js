import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <main class="mt-16 mx-auto max-w-7xl px-2 sm:mt-24">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span class="block xl:inline font-extrabold text-dark-white">
              Luxury Carpet Cleaning <br />
            </span>

            <span class="block text-dark-gold xl:inline lg:font-extrabold">
              {" "}
              and Beyond
            </span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </main>
      <div class="relative sm:mt-12 mt-4 mb-12">
        <div class="absolute inset-x-0 bottom-0 "></div>
        <div class="max-w-7xl mx-auto ">
          <div class="relative shadow-xl sm:overflow-hidden h-96">
            <div class="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="/images/hero.jpg"
                alt="Luxury Oriental Carpet Photo"
                layout="fill"
              />
              <div class="absolute inset-0 bg-dark-blue opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
