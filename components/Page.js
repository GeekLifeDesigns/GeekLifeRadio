import React, { Component } from 'react';
import Meta from "../components/Meta";

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                {this.props.children}
            
            </div>
        );
    }
}

export default Page;