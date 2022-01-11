import React from "react";
/**
 * styled-components can be used whenever you want to render a html object
 * without needing any logic to it. This allows you to create reusable components
 */
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${({ theme }) => theme.secondary};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

Button.defaultProps = {
    theme: PropTypes.object,
}

// To learn more about props:
// https://reactjs.org/docs/components-and-props.html
export default function CustomButton({ children, onClick }) {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

CustomButton.defaultProps = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}