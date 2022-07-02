import { FC } from "react";
import About from './about';
import Our_service from "./our_service";
import Pricing from "./pricing";
import data from '../data/data.json';


const content: FC = () => {
    return(
        <div className="Content">
            <div className="wrapper">
                <About />
            </div>
            <Our_service title={data.Our_service.our_service_title} desc={data.Our_service.our_service_desc} block={data.Our_service.our_service_blocks} />
            <Pricing title={data.Pricing.Pricing_title} desc={data.Pricing.Pricing_desc} block={data.Pricing.Pricing_block}/>
        </div>
    );
}

export default content;
