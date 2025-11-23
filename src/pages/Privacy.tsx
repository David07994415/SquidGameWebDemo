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
            <div className="flex flex-col justify-center items-center gap-6 w-full text-white lg:px-20 px-5">
                <div className="self-center">
                    <PageTitlePart mainTitles={["個人資料收集"]} subTitle="保護您的個人資料與隱私權益" description=""
                    ></PageTitlePart>
                </div>

                <div className="flex flex-col justify-center items-start gap-12 w-full max-w-[1024px]">

                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="flex justify-start items-center gap-1 text-white filter_green text-2xl font-extrabold">
                            <span className="material-symbols-outlined">
                                database
                            </span>
                            <h4 className="text-white filter_pink text-2xl font-extrabold">資料收集
                            </h4>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-pink-main font-extrabold">帳戶資訊：</p>
                            <p>電郵地址、 寄送地址(可選填) 等註冊必要資訊。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-pink-main font-extrabold">競標記錄：</p>
                            <p>競標歷史、出價金額、競標時間等拍賣相關資料。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-pink-main font-extrabold">付款資訊：</p>
                            <p>付款方式偏好 (信用卡資料由第三方付款平台Stripe儲存)。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-pink-main font-extrabold">技術資料：</p>
                            <p>IP 地址、瀏覽器類型、設備資訊等技術日誌。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-pink-main font-extrabold">使用行為：</p>
                            <p>網站使用模式、頁面訪問記錄等匿名統計資料。</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="flex justify-start items-center gap-1 text-white filter_green text-2xl font-extrabold">
                            <span className="material-symbols-outlined">
                                visibility
                            </span>
                            <h4 className="text-white filter_green text-2xl font-extrabold">個人資料將使用於
                            </h4>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">服務提供：</p>
                            <p>處理您的競標、付款及商品配送服務。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">通訊聯絡：</p>
                            <p>發送重要通知、競標結果及服務更新。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">服務改善：</p>
                            <p>分析使用模式以優化平台功能及用戶體驗。</p>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">法律合規: </p>
                            <p>符合相關法律法規要求 (如有需要)。</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="flex justify-start items-center gap-1 text-white filter_green text-2xl font-extrabold">
                            <span className="material-symbols-outlined">
                                lock
                            </span>
                            <h4 className="text-white filter_pink text-2xl font-extrabold">資料保護
                            </h4>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-pink-main font-extrabold">存取控制：</p>
                            <p>網站收集到的個人資料由團隊共同擁有， 並實施嚴格存取機制。</p>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    </>)
}