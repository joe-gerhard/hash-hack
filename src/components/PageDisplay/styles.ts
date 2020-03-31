import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type PageDisplayProps = {
    theme: Theme;
}

const PageDisplay = styled('main')(({ theme }: PageDisplayProps) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 40px);
    width: 100vw;
    background: ${theme.light};
    color: ${theme.dark};
    padding: 20px;
`);

export default {
    PageDisplay,
}