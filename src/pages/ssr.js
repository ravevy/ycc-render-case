import Layout from "@/component/Layout";
import { fetcher } from "@/services";

const title = "Server-Side Rendering";

export async function getServerSideProps() {
  const post = await fetcher();
  return { props: { post } };
}

export default function Ssr({ post }) {
  return (
    <>
      <Layout post={post} title={title} />
    </>
  );
}
