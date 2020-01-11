import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    Row,
    Col
} from 'reactstrap';

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')
    const [isOpen, setOpen] = useState(false)

    const toggleSplit = () => {
        setOpen(!isOpen)
    }

    return (
        <InputGroup>
            <Input placeholder="Search..." />
            <InputGroupAddon addonType="append">
                <UncontrolledDropdown>
                    <DropdownToggle outline color="primary" >
                        <i className="fa fa-plus"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Container>
                            <Row>
                                <Col md={6}>
                                    asd
                                </Col>
                                <Col md={6}>
                                    asd
                                </Col>
                            </Row>
                        </Container>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </InputGroupAddon>
            <InputGroupAddon addonType="append"><Button color="primary" outline><i className="fa fa-search"></i></Button></InputGroupAddon>
        </InputGroup>
    )

}

export default SearchBar