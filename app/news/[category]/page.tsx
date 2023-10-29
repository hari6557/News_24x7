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

export const generateStatisParams = async () =>{
    return categories.map((category)=>({category: category}))
}

