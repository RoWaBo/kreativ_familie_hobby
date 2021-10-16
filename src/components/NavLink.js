import { Link } from "@reach/router";
import { useTheme } from "@emotion/react";

const NavLink = props => {

    const theme = useTheme()

    return (
        <Link {...props} getProps={({ isCurrent }) => {
            return {
                style: { borderBottom: isCurrent && `solid 1px ${theme.colors.primary.main}`}
            }    
        }}/>
    );
}

export default NavLink;