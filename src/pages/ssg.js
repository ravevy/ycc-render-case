import Layout from "@/component/Layout";
import { fetcher } from "@/services";

const title = "Static Site Generating";

export async function getStaticProps() {
  const post = await fetcher();
  return { props: { post } };
}

export default function Ssg({ post }) {
  return (
    <>
      <Layout post={post} title={title} />
    </>
  );
}
