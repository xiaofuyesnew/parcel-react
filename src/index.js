import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

export default class HelloMessage extends React.Component {
    render() {
        return <div className="test">Hello {this.props.name}</div>;
    }
}

const mountNode = document.getElementById("app");
var a = 'haha';

ReactDOM.render(<HelloMessage name={a} />, mountNode);