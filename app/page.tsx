import NewsList from "@/components/NewsList";
import { categories } from "@/Constants"
import FetchNews from "@/utils/FetchNews"


 async function Home() {

  const news: NewsResponse = await FetchNews(categories.join(','));


  return (
    <div>
      <NewsList news={news}/>
    </div>
  )
}

export default Home

