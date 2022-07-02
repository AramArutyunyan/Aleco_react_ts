import Nav from "./nav";
import data from '../data/data.json';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FC } from "react";

const Header: FC = () => {
    return(
        <div className="header">
            <div className="wrapper">
                <Nav navLinks={data.Nav.navLink} navLogo={data.Nav.navLogo}/>



                <div className="slider_content">
                    <div className="slider_buttons">
                        <div className="button_left" ><AiOutlineLeft id="left" /></div>
                        <div className="button_right"><AiOutlineRight id="right" /></div>
                    </div>
                    <div className="slider">
                        <div className="slider_line">
                            {data.Header.slider.map(item => 
                                <div className="slider_block">
                                    <h2 className="slider_title">{item.slider_title}</h2>
                                    <p className="slider_desc">{item.slider_desc}</p>
                                    <button className="slider_button">{item.slider_button}</button>
                                </div>    
                            )}
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Header;