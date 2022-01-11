import React from "react";
import PropTypes from "prop-types";
import { Button } from "../CustomButton/CustomButton";

class CustomButtonClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light"
        }
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === "light" ? "dark" : "light"
        })
    }

    render() {
        return (
            <Button onClick={this.props.onClick}>
                {this.props.children}
            </Button>
        )
    };
}

CustomButtonClass.defaultProps = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CustomButtonClass;