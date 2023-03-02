import Layout from "@/component/Layout";
import { fetcher } from "@/services";
import { useState, useEffect } from "react";

const title = "Client-Side Rendering";

export default function Csr() {
  const [post, setPost] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPosts = await fetcher();
        setPost(fetchedPosts);
      } finally {
        setLoad(true);
      }
    }
    fetchPost();
  }, []);

  return (
    load && (
      <>
        <Layout post={post} title={title} />
      </>
    )
  );
}
