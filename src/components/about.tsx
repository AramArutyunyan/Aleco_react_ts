import { FC } from "react";
import data from '../data/data.json';
const about:FC = () => {
    return (
        <div className="content">
            <h1>{data.Content.About.about_title}</h1>
            <div className="line"></div>
            <p>{data.Content.About.about_desc}</p>
            <div className="about_blocks">
                {data.Content.About.about_blocks.map(item => 
                    <div className="about_content_block">
                        <div className="about_blocks_img_circle"><img src={require(`../img/${item.about_blocks_img}`)} alt="" className="about_blocks_img" /></div>
                        <div className="about_blocks_title">{item.about_blocks_title}</div>
                        <div className="about_blocks_desc">{item.about_blocks_desc}</div>
                    </div>
                )}
            </div>
            <a href="#" className="about_button">{data.Content.About.about_button}</a>
        </div>
    );
}

export default about;