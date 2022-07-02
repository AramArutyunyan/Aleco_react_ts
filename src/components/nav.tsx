import { AiOutlineSearch } from "react-icons/ai";
import React, {FC} from 'react';
interface NavProps{
    navLinks: string[];
    navLogo: string;
}

const Nav: React.FC<NavProps> = ({navLinks, navLogo}) => {
    return(
        <div className="nav">
            <div className="logo"><img src={require(`../img/${navLogo}`)} alt="Alecto"/></div>
            <ul>
                {navLinks.map(item => <li><a href="#">{item}</a></li>)}
                <li><AiOutlineSearch className="search-icon" /></li>
            </ul>
        </div>
    );
}

export default Nav;