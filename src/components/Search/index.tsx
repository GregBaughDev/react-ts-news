import React from "react"
import { Input } from "./styles"

const Search = ({selectSearch}: {selectSearch(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void}) => { 
    return(
        <form>
            <Input onChange={selectSearch} type="text" name="search" id="title" placeholder="Search" />
        </form>
    )
}

export default Search