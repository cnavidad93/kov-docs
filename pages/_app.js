import { useEffect } from "react";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document
      .querySelector("body")
      .classList.add(
        "font-sans",
        "antialiased",
        "text-lg",
        "bg-wash",
        "dark:bg-wash-dark",
        "text-secondary",
        "dark:text-secondary-dark",
        "leading-base"
      );
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
