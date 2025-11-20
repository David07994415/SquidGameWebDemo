import PageTitlePart from "../components/PageTitlePart";
import { useEffect } from "react";
import { useLocation } from "react-router"
import ScrollSection from "../utils/ScrollSection"

export default function Payment() {

    let location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const hashId = location.hash.replace("#", "");
            ScrollSection(hashId);
        }
    }, [location]);

    return (<>
        <div className="relative w-full my-25">
            <div className="flex flex-col justify-center items-center gap-6 w-full text-white px-20">
                <div className="self-center">
                    <PageTitlePart mainTitles={["付款方式"]} subTitle="安全便捷的付款選項" description=""
                    ></PageTitlePart>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-4 w-full max-w-[1024px]">

                    <div className="max-w-[400px] w-full bg-stone-600/50 rounded-lg backdrop-blur-xs flex flex-col justify-start items-start p-16 gap-4">
                        <h4 className="text-white filter_pink text-2xl font-extrabold">支援信用卡付款
                        </h4>
                        <div className="flex justify-center items-center gap-2 text-green-main text-xl font-extrabold">
                            <span className="material-symbols-outlined">mail</span>
                            <h5 className="">
                                信用卡付款</h5>
                        </div>
                        <ul className="space-y-4">
                            <li>• Visa</li>
                            <li>• MasterCard</li>
                            <li>• Apply Pay</li>
                            <li>• Google Pay</li>
                        </ul>
                    </div>
                    <div className="max-w-[400px] w-full bg-stone-600/50 rounded-lg backdrop-blur-xs flex flex-col justify-start items-start p-16 gap-4">
                        <h4 className="text-white filter_pink text-2xl font-extrabold">付款重要事項
                        </h4>
                        <p>系統會根據你的選擇，於以下情況進行信用卡扣款：</p>
                        <p>若你勾選「無論中標與否，我仍願意捐出增加金額（e.g HKD $600）支持是次製作。(愛你多謝你！)」，將被視為無論中標與否，亦願意付出投標價格支持墨魚遊戲2的製作。系統將立即向競標者收款。</p>
                        <p>若你沒有勾選上述選項，系統會在投標結束時，於你成功中標後從你的信用卡扣款。</p>
                        <p className="text-pink-main font-bold">請注意：</p>
                        <p>若出價金額較大，請事先確認 <span className="text-pink-main font-bold">信用卡額度(Credit)</span> 充足。</p>
                        <p>我們 <span className="text-pink-main font-bold">僅接受信用卡付款</span>。若 <span className="text-pink-main font-bold">扣款失敗，可能導致你的投標無效</span>，最終無法成功得標。</p>

                    </div>
                </div>
            </div>
        </div >
    </>)
}