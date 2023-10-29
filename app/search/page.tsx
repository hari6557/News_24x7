import FetchNews from "@/utils/FetchNews"
import NewsList from "@/components/NewsList"
import { notFound } from "next/navigation"
type Props = {
    searchParams : {term : string}
}

const SearchPage = async ({searchParams}: Props) => {
    const news = await FetchNews(
        "general",
        searchParams?.term,
        true
    )
    
  return (
    <div>
        <h1 className="headerTitle">Search Results For: {searchParams?.term}</h1>
        <NewsList news={news}/>
    </div>
  )
}

export default SearchPage