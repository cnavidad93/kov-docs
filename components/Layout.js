import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> KOV - docs</title>
      </Head>
      <main className="content">{children}</main>
    </>
  );
};

export default Layout;
