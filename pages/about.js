import Image from "next/image";

export default function About() {
  return (
    <div className="pb-12">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-7xl md:text-6xl ">
            <span className="block xl:inline font-extrabold text-dark-white">
              About <a className="text-dark-gold">Soho</a>
            </span>
          </h1>
          <div className="flex justify-center">
            <p className="mt-3 mb-3 max-w-md mx-auto text-center text-white sm:text-xl md:mt-5 md:text-2xl md:max-w-4xl font-sans">
              Soho is the product of 3 generations of experience in the rug
              trade. Our knowledge of high-end antique carpets originates in the
              Middle East and encompasses the selection, sale, appraisal,
              maintenance, and servicing of unique hand-knotted carpets. We
              offer expertise in residential and commercial carpet cleaning. We
              are the largest carpet cleaning facility servicing Montreal and
              its surrounding regions. We employ state-of-the-art machinery and
              tailor its washing techniques to your carpet. With Soho, your
              carpets will receive our White Glove Treatment. Our expert team
              performs commercial and residential carpet cleaning projects. We
              respond to clients’ carpet-related concerns and offers solutions,
              advice, and tips for future upkeep. Our team will provide you with
              care and complete satisfaction.
            </p>
          </div>
        </div>
      </main>
      <div className="relative sm:mt-12 mt-4 mb-12">
        <div className="absolute inset-x-0 bottom-0 "></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="relative shadow-xl sm:overflow-hidden h-96">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="/images/about-soho.jpg"
                alt="Luxury Oriental Carpet Photo"
                layout="fill"
              />
              <div className="absolute inset-0 bg-dark-blue opacity-30 "></div>
              <div className="text-black absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
