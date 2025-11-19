import PageTitlePart from "../components/PageTitlePart";
import { useEffect } from "react";
import { useLocation } from "react-router"
import ScrollSection from "../utils/ScrollSection"

export default function privacy() {

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
                    <PageTitlePart mainTitles={["個人資料收集"]} subTitle="保護您的個人資料與隱私權益" description=""
                    ></PageTitlePart>
                </div>

                {/* 相關內容 */}

            </div>
        </div>
    </>)
}