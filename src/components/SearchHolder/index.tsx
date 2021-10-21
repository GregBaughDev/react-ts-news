import React from 'react'
import { SearchHolder } from "./styles";
import Search from "../Search";
import SelectComp from "../Select";

const SearchHolderComp = ({selectSearch}: {selectSearch(e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>): void}) => {
    return(
        <SearchHolder>
            <Search selectSearch={selectSearch} />
            <SelectComp selectSearch={selectSearch} />
        </SearchHolder>
    )
}

export default SearchHolderComp;