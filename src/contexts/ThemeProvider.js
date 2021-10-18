import { ThemeProvider } from "@emotion/react";
import { useThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../style/themes";
import breakPoints from "../style/breakPoints";
// import useWindowSize from "../hooks/useWindowSize";
import useSpacing from "../style/useSpacing";
import useFont from "../style/useFont";

const Theme = ({ children }) => {

    const { theme: themeState } = useThemeContext()
    const spacing = useSpacing()
    const font = useFont()

    const themeSelector = () => {
        if (themeState === "light") return {...lightTheme, font, spacing, breakPoints} 
        if (themeState === "dark") return {...darkTheme, font, spacing, breakPoints} 
    }

    return (
        <ThemeProvider theme={themeSelector}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;