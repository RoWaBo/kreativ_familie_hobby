import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = ({ children, contentWidth, as, width, style }) => {

    const { spacing } = useTheme()


    const Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: ${spacing.wrapping};

        & > * {
            ${contentWidth && `max-width: ${spacing.contentWidth};`};   
            ${width && `max-width: ${width};`};   
        }    
    `

    return <Container as={as} style={style}>{ children }</Container>
}

Container.propTypes = {
    contentWidth: PropTypes.bool,
    as: PropTypes.string,
    width: PropTypes.string
}

export default Container;