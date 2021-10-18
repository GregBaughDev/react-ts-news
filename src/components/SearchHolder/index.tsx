import { SearchHolder } from "./styles";
import Search from "../Search";
import SelectComp from "../Select";

const SearchHolderComp = () => {
    return(
        <SearchHolder>
            <Search />
            <SelectComp />
        </SearchHolder>
    )
}

export default SearchHolderComp;