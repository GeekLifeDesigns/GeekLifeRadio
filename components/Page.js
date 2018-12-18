import React, { Component } from 'react';
import Meta from "../components/Meta";
import TopNav from "../components/TopNav";
import Header from "../components/Header";

class Page extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <Header/>
                <Meta/>
                {this.props.children}
            
            </div>
        );
    }
}

export default Page;