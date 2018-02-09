import React from "react";
import Header from './Header';
import Footer from './Footer';

let a = '张三',
    b = '李四',
    parta = '脑袋子',
    partb = '脚丫子';

export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Header name = { a } part = { parta } />
                <Footer name = { b } part = { partb } />
            </div>
        );
    }
}