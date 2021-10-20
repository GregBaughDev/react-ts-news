import React from "react"
import { Select } from "./styles"

const SelectComp = ({selectSearch}: {selectSearch(e: React.ChangeEvent<HTMLSelectElement>): void}) => {
    const topics = ["Headlines", "Australia", "UK", "Melbourne", "Liverpool", "Leeds", "Newcastle", "Malmö", "Berlin"]
    
    return(
        <Select onChange={selectSearch}>
            <option disabled>Select topic</option>
            {topics.map((topic, idx) => <option key={idx}>{topic}</option>)}
        </Select>
    )
}

export default SelectComp