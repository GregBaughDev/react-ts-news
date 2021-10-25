import React from "react"
import { Input } from "./styles"

const Search = ({selectSearch, searchInput}: 
    {selectSearch(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void,
    searchInput: React.RefObject<HTMLInputElement>}) => { 
    return(
        <form>
            <Input ref={searchInput} onChange={selectSearch} type="text" name="search" id="title" placeholder="Search" />
        </form>
    )
}

export default Search