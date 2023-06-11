import {ThemeProvider, unstable_createMuiStrictModeTheme} from '@mui/material';

const mui_theme = unstable_createMuiStrictModeTheme();

export const withMui = (component: Component) => () => (
    <ThemeProvider theme={mui_theme}>
      {component()}
    </ThemeProvider>
)