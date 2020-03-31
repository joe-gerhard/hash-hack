import { SimpleInterpolation } from "styled-components";

export type Theme = {
    light: SimpleInterpolation;
    dark: SimpleInterpolation;
    primary: SimpleInterpolation;
    secondary: SimpleInterpolation;
}

const theme = {
    light: '#EEEEEE',
    dark: '#000000',
    primary: '#FF0000',
    secondary: '#00FF00',
}

export default theme;
