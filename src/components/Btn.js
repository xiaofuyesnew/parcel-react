import React from "react";

export default class Btn extends React.Component {
    render() {
        return <div className="footer">Hello {this.props.name}, 这里是脚部</div>;
    }
}
