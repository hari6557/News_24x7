import NewsList from "@/components/NewsList"
import { categories } from "@/Constants"
import FetchNews from "@/utils/FetchNews"

type Props = {
    params : {category : Category}
}

const NewsPage = async ({params: {category}}: Props) => {

    const news = await FetchNews(category)
  return (
    <div>
        <h1 className="headerTitle">{category}</h1>
        <NewsList news={news}/>
    </div>
  )
}

export default NewsPage

export async function getStaticProps({ params }: Props) {
    const { category } = params;
    const news = await FetchNews(category);
    return {
        props: {
            category,
            news,
        },
    };
}

export async function getStaticPaths() {
    const paths = categories.map((category) => ({ params: { category } }));
    return {
        paths,
        fallback: false,
    };
}

