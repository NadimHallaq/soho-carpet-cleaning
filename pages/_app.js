import "tailwindcss/tailwind.css";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-dark-blue">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
