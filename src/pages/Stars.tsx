import { useParams } from "react-router";

import demoMain from "../assets/001_main.webp"
import cloth_front from "../assets/001_F.webp"
import cloth_back from "../assets/001_B.webp"
import PicSelection from "../components/PicSelection";
import { useState } from "react";

export default function Stars() {
    let { starId } = useParams();

    const startPrice = 400;
    const [price,setPrice] = useState(100);
    const [endPrice,setEndPrice] = useState(500);

    const handlePrice= (p) =>{
        setPrice(price+p);
        setEndPrice(startPrice+price);
    }

    let images = [demoMain, cloth_front, cloth_back]


    return (
        <>
            <div className="relative w-full my-25">
                <div className="flex justify-center items-start gap-8 px-3">
                    <div className="max-w-[600px] w-full mt-5">
                        <PicSelection images={images}></PicSelection>
                    </div>
                    <div className="max-w-[600px] w-full flex flex-col justify-start items-center gap-10">

                        <h2 className="text-3xl text-center text-pink-main neon-glow font-[1200]" >案標拍賣規則</h2>
                        <div className="flex flex-col justify-center items-center rounded text-white gap-5 w-full">
                            <h4 className="self-start text-xl text-pink-main neon-glow">你的出價</h4>
                            <div className="flex flex-col justify-center items-start gap-1 bg-gray-400 w-full p-3 round-md">
                                <div className="w-full flex justify-between gap-3">
                                    <div>起始價</div>
                                    <div>輸入金額</div>
                                    <div>總出價</div>
                                </div>
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-pink-main text-xl">${startPrice}</div>
                                    <div className="flex justify-center items-start gap-1">
                                        <span className="text-3xl">+ </span>
                                        <div className="w-full border-red-500 flex justify-center items-start border-2 border-pink-main">
                                            <button className="p-2 bg-gray-300 text-xl" onClick={()=>{handlePrice(-100)}}>-</button>
                                            <div className="px-10 py-2 text-green-main text-xl">{price}</div>
                                            <button className="p-2 bg-pink-main text-xl" onClick={()=>{handlePrice(100)}}>+</button>
                                        </div>
                                        <span className="text-3xl"> =</span>
                                    </div>
                                    <div className="text-pink-main text-xl">${endPrice}</div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

            the starId is {starId}
        </>
    )
}