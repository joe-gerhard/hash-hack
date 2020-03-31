import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

type NavbarProps = {
    theme: Theme
}

const Navbar = styled('nav')(({ theme }: NavbarProps) => css`
    display: flex;
    align-items: center;
    height: 40px;
    width: 100vw;
    background: ${theme.dark};
    padding: 0 100px;
`);

const StyledLink = styled(Link)(({ theme }: NavbarProps) => css`
    text-decoration: none;
    color: ${theme.light};
    margin-right: 20px;
`);

export default {
    Navbar,
    Link: StyledLink,
}