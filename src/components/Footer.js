import React from "react";

export default class Footer extends React.Component {
    render() {
        return <div className="footer">Hello {this.props.name}, 这里是{this.props.part}</div>;
    }
}
