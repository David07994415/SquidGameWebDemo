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
            <div className="flex flex-col justify-center items-center gap-6 w-full text-white lg:px-20 px-5">
                <div className="self-center">
                    <PageTitlePart mainTitles={["退款政策"]} subTitle="拍賣退款條款於申請流程" description=""
                    ></PageTitlePart>
                </div>

                <div className="flex flex-col justify-center items-start gap-12 w-full max-w-[1024px]">
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <h4 className="text-white filter_pink text-2xl font-extrabold">基本退款政策
                        </h4>
                        <p className="text-pink-main font-bold">重要提醒：所有競標均為最終決定，一般情況下不接受退款申請。</p>
                        <p>由於拍賣的特殊性質，我們的退款政策較為嚴格。競標者在提交競標前應充分考慮， 確保了解所有拍賣條款及商品詳情。</p>
                        <p><span className="text-pink-main font-bold">競標性質：</span>所有競標一經提交即具法律約束力。</p>
                        <p><span className="text-pink-main font-bold">最終責任：</span>得標者有義務完成付款及接收商品。</p>
                        <p><span className="text-pink-main font-bold">例外情況：</span>僅在特定情況下考慮退款申請（詳見下文）。</p>
                    </div>

                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <h4 className="text-white filter_green text-2xl font-extrabold">退款申請流程
                        </h4>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">步驟一：聯絡客服</p>
                            <p>在付款後 7 天內聯絡客服團隊，說明退款原因並提供相關證據。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">步驟二：案件審核</p>
                            <p>客服團隊將在 2-3 個工作天內審核您的申請及提供的證據。</p>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">步驟三：退款決定</p>
                            <p>根據審核結果，我們將通知您退款申請是否獲得批准。</p>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">步驟四：處理退款</p>
                            <p>獲批准的退款將在 5-10 個工作天內處理，退款至原付款方式。</p>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-0">
                            <p className="text-green-main font-extrabold">步驟五：確認完成</p>
                            <p>退款處理完成後，您將收到確認通知及相關文件。</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>)
}