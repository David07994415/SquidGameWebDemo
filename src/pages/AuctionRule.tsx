import AuctionRulePart from "../components/AuctionRulePart";
import PageTitlePart from "../components/PageTitlePart";
import { useEffect } from "react";
import { useLocation } from "react-router"
import ScrollSection from "../utils/ScrollSection"

export default function AuctionRule() {

    let location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const hashId = location.hash.replace("#", "");
            ScrollSection(hashId);
        }
    }, [location]);


    return (
        <>
            <div className="relative w-full my-25">
                <div className="flex flex-col justify-center items-starts gap-6 w-full text-white px-20">
                    <div className="self-center">
                        <PageTitlePart mainTitles={["墨魚遊戲2", "拍賣條款及細則"]} subTitle="次高價密封拍賣 規則說明" description="此拍賣活動受此網站所有條款及細則約束（包括“常見問題”），出價者一經出價，代表已詳細觀看及接受此網站所有條款及細則，敬請留意。"
                        ></PageTitlePart>
                    </div>
                    <AuctionRulePart></AuctionRulePart>
                </div>
            </div>
        </>
    )
}