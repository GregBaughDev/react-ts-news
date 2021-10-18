import { Input } from "./styles"

const Search = () => {
    const searchNews = () => {
        console.log("searching")
    }
    
    return(
        <form>
            <Input onChange={searchNews} type="text" name="search" id="title" placeholder="Search" />
        </form>
    )
}

export default Search