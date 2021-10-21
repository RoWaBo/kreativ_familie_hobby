/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavLink from "./NavLink";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "@emotion/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useState } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";
import useMediaQuery from "../style/useMediaQuery";
import useScrollDirection from "../hooks/useScrollDirection";

const NavBar = (props) => {

    // HOOKS
    const { width } = useWindowSize()
    const { colors, font, spacing, breakPoints } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const mq = useMediaQuery()
    const [pathName, setPathName] = useState()
    useEffect(() => setPathName(props.location.pathname.replace(/\//g, "")), [props.location.pathname])
    const scrollDirection = useScrollDirection() 

    //  FUNCTIONS
    const toggleMobileMenu = () => {
        if (width < breakPoints.mobile) {
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
        }
    }

    // VARIABLES
    const navBarHeight = mq(["35", "50px" ])

    // === EMOTION STYLE ===
    const navBarStyle = css`
        max-width: ${spacing.contentWidth};
        margin: 0 auto;
        padding: 0 ${spacing.wrapping};  
        width: 100%; 
        height: ${navBarHeight};
        display: flex;
        justify-content: ${width < breakPoints.mobile ? "space-between" : "center"};
        align-items: center;
        overflow: hidden;

        & li {
            font-size: ${font.size.m};
            font-weight: ${font.weight.regular};
            color: ${colors.font.primary.main};
            text-transform: uppercase;

            & > * {
                transition: color .2s ease-out;    
            }
            &:hover > * {
                color: ${colors.primary.main};
            }
        }
    `

    const toggleThemeBtnContainerStyle = css`
        margin-left: auto;
        padding-left: ${spacing.l};
    `

    const menuIconContainerStyle = css`
        display: grid;
        place-content: center;
        width: fit-content;
        justify-self: start;

        & > * {
            font-size: ${font.icon.m};
            color: ${colors.font.primary.main};    
        }
    `

    const layerStyle = css`
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
    `

    const listStyle = css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;

        & > * + * {
            margin-left: ${spacing.l};
        }
    `
    const listMobileStyle = css`
        position: absolute;
        z-index: 10;
        top: 0;
        left: ${isMenuOpen ? "0" : "-70vw"}; 
        padding: ${spacing.wrapping};
        background: ${colors.background.primary};
        width: 70vw;
        height: 100vh;
        transition: all .4s;
        box-shadow: inset rgba(149, 157, 165, 0.15) 0px 8px 20px; 
        
        & > * + * {
            margin-top: ${spacing.l};
        }    
    `
    const headerStyle = css`
        background: ${colors.background.primary};
        padding: ${spacing.xs} 0;
        margin-bottom: 5vh;
        box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 20px;

        /* Sticky header - appears when scrolling up */
        transition: all .7s; 
        position: sticky;

        ${scrollDirection === "down" && (`
            top: -70px;
        `)}
        ${scrollDirection === "up" && (`
            top: 0px;
        `)}
    `
    const pathNameMobileStyle = css`
        text-transform: uppercase;
        font-size: ${font.size.m};
    `

    return (
        <header css={headerStyle}>
            {isMenuOpen && <div css={layerStyle} onClick={toggleMobileMenu}></div>}
            <nav css={navBarStyle}>
                {width < breakPoints.mobile && (<>
                    <div onClick={toggleMobileMenu} css={menuIconContainerStyle}>
                        <AiOutlineMenu />
                    </div>
                    <h1 css={pathNameMobileStyle}>{pathName === "" ? "Forside" : pathName}</h1>
                </>)}
                <ul css={width < breakPoints.mobile ? listMobileStyle : listStyle}>
                    {width < breakPoints.mobile && (
                        <li onClick={toggleMobileMenu} css={menuIconContainerStyle}>
                            <IoMdClose />
                        </li>
                    )}
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/">Forside</NavLink>
                    </li >
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/produkter">Produkter</NavLink>
                    </li>
                    <li onClick={toggleMobileMenu}>
                        <NavLink to="/kontakt">Kontakt</NavLink>
                    </li>
                </ul>
                {props.themeBtn && (
                    <div css={toggleThemeBtnContainerStyle}>
                        <ToggleThemeBtn>change theme</ToggleThemeBtn>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default NavBar;