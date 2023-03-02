import axios from "axios";

export function fetcher() {
  return axios({
    url: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldv0hvzc0nap01unhwc96khc/master",
    method: "post",
    data: {
      query: `
      query Posts {
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
      `,
    },
  }).then((data) => data.data.data.posts[0]);
}
