import PageTitlePart from "../components/PageTitlePart";
import { useEffect } from "react";
import { useLocation } from "react-router"
import ScrollSection from "../utils/ScrollSection"

export default function Refund() {

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
            <div className="flex flex-col justify-center items-starts gap-6 w-full text-white px-20">
                <div className="self-center">
                    <PageTitlePart mainTitles={["退款政策"]} subTitle="拍賣退款條款於申請流程" description=""
                    ></PageTitlePart>
                </div>

                {/* 相關內容 */}

            </div>
        </div>
    </>)
}