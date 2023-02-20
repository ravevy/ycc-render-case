import Layout from "@/component/Layout";
import request from "graphql-request";
import { useState, useEffect } from "react";
import Head from "next/head";

const title = "Client-Side Rendering";

export default function Csr() {
  const [post, setPost] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const { posts } = await request(
        "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldv0hvzc0nap01unhwc96khc/master",
        `
      {
        posts {
          title
          author
          content
          createdAt
          image {
            url
          }
        }
      }
    `
      );
      setPost(posts[0]);
      setLoad(true);
    };
    fetchPost();
  }, []);

  return (
    load && (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Layout post={post} title={title} />
      </>
    )
  );
}
