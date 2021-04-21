import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Commercial from "../components/Commercial";
import ChooseUs from "../components/ChooseUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soho Carpet Cleaning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ChooseUs />
      <Services />
      <Commercial />
    </div>
  );
}
