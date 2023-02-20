import Head from "next/head";

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="rendering patterns in web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
