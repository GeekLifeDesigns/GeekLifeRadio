import React, { Component } from 'react';
import styled from 'styled-components';

const TopNavStyle = styled.div`
    width: 100%;
    background-color: black;
    color: white;

    li{
        display: inline;
        margin-left: 10px;
        font-size: small;

        & hover {
            color: grey;
        }
    }
    

`;

class TopNav extends Component {
    render() {
        return (
            <TopNavStyle>
                <div>
                   <ul>
                       <li>Comic & Books</li>
                       <li>|</li>
                       <li>Movies & TV</li>
                       <li>|</li>
                       <li>Video Games</li>
                       <li>|</li>
                       <li>Table Games</li>
                       <li>|</li>
                       <li>Tech</li>
                       <li>|</li>
                       <li>Pro Wrestling</li>
                       <li></li>
                   </ul>
                </div>
            </TopNavStyle>
        );
    }
}

export default TopNav;

