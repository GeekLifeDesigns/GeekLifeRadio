import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Signika");
    font-family: 'Signika', sans-serif;


`
const MenuStyle = styled.div`
   
    

    img {
        width: 150px;
        float: left;
        margin: 20px;
    }

    ul {
        width: 50%;
        margin-right: auto;
        margin-left: auto;
    }  
   

    li {
        float: left;
        margin: 1rem;
        font-size: small;
        text-decoration: none;
        list-style-type: none;
    }
`;


const Header = () => (
    <MenuStyle>
        <div>
            <img src="../static/images/GeekLifeRadioLogoLargeText.png"/>
            <ul>
                <li>NEWS</li>
                <li>MUSIC</li>
                <li>PODCASTS</li>
                <li>SCHEDULE</li>
                <li>EVENTS</li>
                <li>SUBMISSIONS <i className="fas fa-sort-down"></i></li>
            </ul>
        </div>
    </MenuStyle>
)

export default Header;