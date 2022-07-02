import { FC } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


interface IPrice{
    price: number;
    pDesc: string;
    desc: string;
    button: string;
}

interface PricingProps {
    title: string;
    desc: string;
    block: IPrice[];
}

const pricing: FC<PricingProps> = ({title, desc, block}) => {
    return(
        <div className="pricing">
            <div className="wrapper">
                <h1 className="price_title">{title}</h1>
                <div className="line"></div>
                <p className="price_desc">{desc}</p>

                <div className="prices_blocks">
                    {block.map(item => 
                        <div className="prices_block">
                            <div className="price_sec_desc">
                                <p className="prices_block_price"><span>$</span>{item.price}</p>
                                <p className="price_desc">{item.pDesc}</p>
                            </div>
                            <div className="block_desc">
                                <p className="block_desc">{item.desc}</p>
                            </div>
                            <a href="#" className="block_button">
                                <p className="button">{item.button}</p>
                                <AiOutlineShoppingCart className="cart_icon" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default pricing;