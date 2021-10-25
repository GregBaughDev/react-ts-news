import React from 'react'
import { SearchHolder } from "./styles";
import Search from "../Search";
import SelectComp from "../Select";

const SearchHolderComp = ({selectSearch, searchInput}: 
    {selectSearch(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void,
    searchInput: React.RefObject<HTMLInputElement>}) => {
    return(
        <SearchHolder>
            <Search selectSearch={selectSearch} searchInput={searchInput} />
            <SelectComp selectSearch={selectSearch} />
        </SearchHolder>
    )
}

export default SearchHolderComp;