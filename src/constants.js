import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    --blue-hue: 220deg;
    --low-saturation: 3%;
    --low-lightness: 20%;

    --color-white: hsl(0deg 0% 100%);
    --color-gray-100: hsl(185deg 5% 95%);
    --color-gray-300: hsl(190deg 5% 80%);
    --color-gray-500: hsl(196deg 4% 60%);
    --color-gray-700: hsl(var(--blue-hue) 5% 40%);
    --color-gray-900: 
      hsl(var(--blue-hue) var(--low-saturation) var(--low-lightness));
    --color-primary: hsl(340deg 65% 47%);
    --color-secondary: hsl(240deg 60% 63%);

    --weight-normal: 500;
    --weight-medium: 600;
    --weight-bold: 800;
  }
`;

const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
