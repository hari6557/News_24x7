import { gql } from "graphql-request"
import sortNewsByImage from "./Utils";

const FetchNews = async (
    category ?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQl query
    const query = gql`
    query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "gb"
            sort: "published_desc"
            keywords: $keywords
        ) {
          data {
            author
            country
            category
            image
            description
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `;

    //Fetch function with Next Js 13 caching....

    const res = await fetch('https://broussard.stepzen.net/api/killer-dog/__graphql', {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate : 0} : {revalidate : 20},
        headers: {
            "Content-Type": "application/json",
            Authorization : `Apikey broussard::stepzen.net+1000::e29d0c6b772e7bb4012323e3472f4c479fbd8ed652d04ded3633257daa75c2e8`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key : "2b0aaa86e781657fcd182de11fe88152",
                categories : category,
                keywords: keywords
            }
        })
    })

    console.log("Loding data....", category, keywords)
    const newResponse = await res.json();

    //Sort function by images present vs not present

    const sortedResponse = sortNewsByImage(newResponse?.data?.myQuery)


    return sortedResponse
}

export default FetchNews