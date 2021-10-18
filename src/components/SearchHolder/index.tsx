import React from 'react'
import { SearchHolder } from "./styles";
import Search from "../Search";
import SelectComp from "../Select";

const SearchHolderComp = ({selectSearch}: {selectSearch(e: React.ChangeEvent<HTMLSelectElement>): void}) => {
    return(
        <SearchHolder>
            <Search />
            <SelectComp selectSearch={selectSearch} />
        </SearchHolder>
    )
}

export default SearchHolderComp;