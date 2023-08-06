import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme ({config, colors:{gray:{50:'#f9f9f9'}}})

export default theme;