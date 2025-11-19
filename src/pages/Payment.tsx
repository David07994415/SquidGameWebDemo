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
            <div className="flex flex-col justify-center items-starts gap-6 w-full text-white px-20">
                <div className="self-center">
                    <PageTitlePart mainTitles={["付款方式"]} subTitle="安全便捷的付款選項" description=""
                    ></PageTitlePart>
                </div>

                {/* 相關內容 */}

            </div>
        </div>
    </>)
}