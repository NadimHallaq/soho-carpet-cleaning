import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-dark-blue">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
