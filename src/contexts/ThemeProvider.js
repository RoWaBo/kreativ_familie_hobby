import { ThemeProvider } from "@emotion/react";
import { useThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../style/themes";
import font from "../style/font";
import spacing from "../style/spacing";
import breakPoints from "../style/breakPoints";
import useWindowSize from "../hooks/useWindowSize";

const Theme = ({ children }) => {

    const { theme: themeState } = useThemeContext()
    const { width } = useWindowSize()

    const mediaQuery = array => {
        return width < breakPoints.mobile ? array[0] : array[1]
    }

    spacing.wrapping = mediaQuery(["1rem", "2rem"])

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