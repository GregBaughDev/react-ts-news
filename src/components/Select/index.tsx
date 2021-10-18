import React from "react"
import { Select } from "./styles"

const SelectComp = ({selectSearch}: {selectSearch(e: React.ChangeEvent<HTMLSelectElement>): void}) => {
    return(
        <Select onChange={selectSearch}>
            <option disabled>Select topic</option>
            <option>Headlines</option>
            <option>Australia</option>
            <option>UK</option>
            <option>Melbourne</option>
            <option>Liverpool</option>
            <option>Leeds</option>
            <option>Newcastle</option>
            <option>Malmo</option>
            <option>Berlin</option>
        </Select>
    )
}

export default SelectComp