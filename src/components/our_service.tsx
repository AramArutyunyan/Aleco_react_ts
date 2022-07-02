import { request } from "http";
import { FC } from "react";

interface IBlock{
    block_img: string;
    block_desc: string;
    block_title: string;
}

interface Our_service_home{
    title: string;
    desc: string;
    block: IBlock[];
}

const our_service: FC<Our_service_home> = ({title, desc, block}) => {

    return(
        <div className="our_service">
            <div className="wrapper">
                <h1 className="our_services_title">{title}</h1>
                <div className="line"></div>
                <div className="our_service_desc">{desc}</div>
                
                <div className="our_service_blocks">

                    {block.map(item => 
                        <div className="our_service_block">
                            <div className="block_title">
                                <img src={require(`../img/${item.block_img}`)} alt="" className="our_service_img" />
                                <h1 className="our_service_title">{item.block_title}</h1>
                            </div>
                            <p className="our_service_description">{item.block_desc}</p>
                        </div>     
                    )}



                </div>
            </div>
        </div>
    );
}

export default our_service;