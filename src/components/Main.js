import React from "react";
import Header from './Header'
import Footer from './Footer'

let a = '张三',
    b = '李四';

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header name = { a } />
                <Footer name = { b } />
            </div>
        );
    }
}