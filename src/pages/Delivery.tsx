import PageTitlePart from "../components/PageTitlePart";
import { useEffect } from "react";
import { useLocation } from "react-router"
import ScrollSection from "../utils/ScrollSection"

export default function Delivery() {

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
                    <PageTitlePart mainTitles={["運送資訊"]} subTitle="商品配送與物流資訊" description=""
                    ></PageTitlePart>
                </div>

                <div className="flex flex-col justify-center items-starts gap-4 w-full max-w-[1024px]">
                    <h4 className ="text-white filter_pink text-2xl font-extrabold">重要提醒
                    </h4>
                    <ul className="space-y-4">
                        <li>• 請確保提供正確完整的收件地址及聯絡資訊。</li>
                        <li>• 如因地址錯誤導致配送失敗，額外產生的運送費用將用買家承擔。</li>
                        <li>• 商品會以順豐到付方式寄送，並提供追蹤碼讓你隨時查詢。在結帳時，不會預先收取買家運費，而是到付收貨時，買家直接向物流服務繳付運費。</li>
                        <li>• 配送期間如遇特殊情況（如天氣、海關等），配送時間可能延遲，一切依照物流公司安排。</li>
                        <li>• 海外地區亦可配送，我們將視目的地選擇合適的物流服務商（可能為順豐或其他國際快遞），並同樣採用到付方式寄送。</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </>)
}