import styled from 'styled-components';

const MenuStyle = styled.ul`
    width: 100%;
    text-align: center;
   

    li {
        display: inline;
        margin: 2rem;
    }
`;


const Header = () => (
    <MenuStyle>
    <ul>
        <li>NEWS</li>
        <li>MUSIC</li>
        <li>PODCASTS</li>
        <li>SCHEDULE</li>
        <li>EVENTS</li>
        <li>SUBMISSIONS</li>
    </ul>
    </MenuStyle>
)

export default Header;