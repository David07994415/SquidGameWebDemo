import { useParams } from "react-router";

import demoMain from "../assets/001_main.webp"
import cloth_front from "../assets/001_F.webp"
import cloth_back from "../assets/001_B.webp"
import PicSelection from "../components/PicSelection";
import { useEffect, useState, useRef } from "react";

export default function Stars() {
    let { starId } = useParams();
    let starName = "David";

    const startPrice = 400;
    const [price, setPrice] = useState(100);
    const [endPrice, setEndPrice] = useState(500);

    const [showContract, setShowContract] = useState(false);

    const handlePrice = (p: number) => {
        let resultPrice = price + p;
        if (price + p < 100) return;
        setPrice(resultPrice);
    }

    const handleInputPrice = (p: string) => {
        const intParse = parseInt(p, 10);
        const intParseResult = isNaN(intParse) ? null : intParse;
        if (intParseResult === null) return;
        console.log(intParse)
        setPrice(intParse);
    }

    useEffect(() => {
        setEndPrice(startPrice + price);
    }, [price]);

    let images = [demoMain, cloth_front, cloth_back]

    const handleShowContract = (isCheck: boolean) => {
        setShowContract(isCheck);
    }

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isAtBottom, setIsAtBottom] = useState(false);
    useEffect(() => {
        const srcollDetect = () => {
            const el = scrollRef.current;
            if (el) {
                const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;
                if (atBottom) { setIsAtBottom(true) }
            }
        };

        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', srcollDetect);
        }

        return () => {
            if (el) {
                el.removeEventListener('scroll', srcollDetect);
                setIsAtBottom(false);
            }
        }
    }, [showContract])

    return (
        <>
            <div className="relative w-full my-25">
                <div className="flex justify-center items-start gap-8 px-3">
                    <div className="max-w-[500px] w-full mt-5 rounded-md border-2 border-pink-main">
                        <PicSelection images={images}></PicSelection>
                    </div>
                    <div className="max-w-[500px] w-full flex flex-col justify-start items-center gap-5 relative z-40">

                        <h2 className="text-3xl text-center text-pink-main neon-glow font-[1200]" >案標拍賣規則</h2>
                        <div className="flex flex-col justify-center items-center rounded text-white gap-5 w-full bg-gray-800 p-5">
                            <h4 className="self-start text-xl text-pink-main neon-glow">你的出價</h4>

                            <div className="flex flex-col justify-center items-start gap-1 bg-slate-900 w-full p-3 round-md">
                                <div></div>
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
                                            <button className="p-2 bg-slate-700 text-xl" onClick={() => { handlePrice(-100) }}>-</button>
                                            <input type="text" className="w-[150px] text-center py-2 text-green-main text-xl" value={price} onChange={(e) => { handleInputPrice(e.target.value) }} />

                                            <button className="p-2 bg-pink-main text-xl" onClick={() => { handlePrice(100) }}>+</button>
                                        </div>
                                        <span className="text-3xl"> =</span>
                                    </div>
                                    <div className="text-pink-main text-xl">${endPrice}</div>
                                </div>
                            </div>
                            <div className="text-white self-start text-sm">增加金額必須以 HKD 100 為單位，總出價最低為 HKD 500。</div>
                        </div>

                        <div className="flex flex-col justify-center items-center rounded text-white gap-7 w-full bg-gray-800 p-5">
                            <div className="w-full flex flex-col justify-center items-center gap-2">
                                <h4 className="self-start text-xl text-pink-main neon-glow">有甚麼想跟{starName}說?</h4>
                                <textarea rows={3} className="w-full border-2 border-pink-main rounded-md caret-pink-main focus:outline-none focus:ring-1 focus:ring-pink-main"></textarea>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center gap-2">
                                <h4 className="self-start text-xl text-pink-main">支持拍攝</h4>
                                <p className="self-start text-sm text-gray-500">支持製作團隊，不論是否中籤</p>
                                <div className="w-full flex justify-start items-center gap-2">
                                    <input id="donote" type="checkbox" className="w-5 h-5   border-2 border-red-500 accent-pink-main checked:bg-blue-800 checked:border-0" />
                                    <label htmlFor="donote">無論中標與否，我仍願意捐出 <span className="font-bold text-md text-pink-main">{endPrice}</span> 金額</label>
                                </div>
                                <div className="w-full border-1 border-gray-500 my-3"></div>
                                <div className="w-full flex justify-start items-center gap-2">
                                    <input id="contract" type="checkbox" className="w-5 h-5   border-2 border-red-500 accent-pink-main checked:bg-blue-800 checked:border-0"
                                        name="contract"
                                        onChange={(e) => handleShowContract(e.target.checked)} checked={showContract} />
                                    <label htmlFor="contract">我同意拍賣條款與細則 (點擊閱讀){showContract}</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {
                showContract && (
                    <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 max-w-3xl bg-slate-800 text-white max-h-[600px] border-2 border-pink-main rounded-md" style={{ scrollbarWidth: 'thin', scrollbarColor: "rgb(237, 27, 118) rgba(31, 41, 55, 0.3)" }}>
                        <div className="flex flex-col jusify-center items-center w-full gap-3 p-3 pt-4">
                            <h4 className="self-start font-extrabold text-xl">拍賣條款與細則</h4>
                            <div ref={scrollRef} className="w-full max-h-[200px] bg-black p-2 overflow-y-auto">
                                <p className="w-full  ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis sit iure placeat, dolor totam doloribus! Necessitatibus animi qui consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis sit iure placeat, dolor totam doloribus! Necessitatibus animi qui Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis sit iure placeat, dolor totam doloribus! Necessitatibus animi qui consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis sit iure placeat, dolor totam doloribus! Necessitatibus animi qui consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis sit iure placeat, dolor totam doloribus! Necessitatibus animi qui consectetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem velit, esse ut id quae maiores explicabo optio quam quo officiis sit iure placeat, dolor totam doloribus! Necessitatibus animi qui consectetur?</p>
                            </div>
                            {
                                isAtBottom ? (
                                    <div className="w-full flex justify-start items-center gap-2">
                                        <input id="agree" type="checkbox" className="w-5 h-5   border-2 border-red-500 accent-pink-main checked:bg-blue-800 checked:border-0"
                                            name="agree"
                                        />
                                        <label htmlFor="agree">我已經同意上方條款</label>
                                    </div>
                                ) : (
                                    <p>請先閱讀完成相關資訊</p>
                                )
                            }

                            <div className="w-full flex justify-center items-center gap-3">
                                <button className="w-full p-3 text-center bg-gray-500 rounded-md hover:bg-pink-500/50" onClick={()=>{handleShowContract(false)}}> 取消
                                </button>
                                <button className={`w-full p-3 text-center bg-gray-500/80 rounded-md ${!isAtBottom?'bg-gray-800':'bg-gray-500 hover:bg-pink-500/50'}`} disabled={!isAtBottom}> 同意條款
                                </button>
                            </div>

                        </div>
                    </div>
                )
            }



        </>
    )
}