import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Commercial from "../components/commercial";
import ChooseUs from "../components/ChooseUs";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Soho Carpet Cleaning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <ChooseUs />
      <Services />
      <Commercial />
    </div>
  );
}
