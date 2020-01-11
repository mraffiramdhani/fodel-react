import React, { useState } from 'react';
import { InputGroup, Input } from 'reactstrap'

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const handleOnChange = (value) => {
        setSearchValue(value)
        props.onValueChanged(value)
    }

    return (
        <InputGroup>
            <Input placeholder={props.customPlaceholder} value={searchValue} onChange={e => handleOnChange(e.target.value)} />
        </InputGroup>
    )

}

export default SearchBar