import Layout from "@/component/Layout";
import { GraphQLClient, gql } from 'graphql-request';
import Head from "next/head";

const title = "Server-Side Rendering"

const hygraph = new GraphQLClient(
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldv0hvzc0nap01unhwc96khc/master'
);

const QUERY = gql`
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
}`

export async function getServerSideProps() {
  const { posts } = await hygraph.request(QUERY)
  return { props: {posts} }
}  

export default function Ssr({posts}){
  return( 
    <>
    <Head>
      <title>{title}</title>
      </Head>
    <Layout post={posts[0]} title={title} />
    </>
  )
}