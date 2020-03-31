import React from 'react'
import Styled from './styles';

const Navbar = () => {
    return (
        <Styled.Navbar>
            <Styled.Link to="/search">Search</Styled.Link>
            <Styled.Link to="/input">Input</Styled.Link>
        </Styled.Navbar>
    )
}

export default Navbar;
