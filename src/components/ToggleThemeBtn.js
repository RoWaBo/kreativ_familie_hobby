import { useThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from "@emotion/react";
import { LightenDarkenColor } from "../helperFunctions";

const ToggleThemeBtn = () => {

    const { theme, setTheme } = useThemeContext()
    const { colors, font } = useTheme()

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }        
    }

    // === STYLING ===
    const buttonStyle = {
        padding: '.5rem',
        display: 'grid',
        placeContent: 'center',
        borderRadius: '50%',
        backgroundColor: theme === "light" ? colors.grey.light : LightenDarkenColor(colors.background.primary, 40)  
    }

    const iconStyle = {
        fontSize: font.icon.m,
        color: colors.font.primary.main    
    }

    return ( 
        <Button onClick={toggleTheme} style={buttonStyle}>
            {theme === "light" ? <FiMoon style={iconStyle} /> : <FiSun style={iconStyle}/>}
        </Button> 
    );
}
 
export default ToggleThemeBtn;