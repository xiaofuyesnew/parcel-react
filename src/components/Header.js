import React from "react";

export default class Header extends React.Component {
    render() {
        return <div className="header">Hello {this.props.name}, 这里是{this.props.part}</div>;
    }
}
