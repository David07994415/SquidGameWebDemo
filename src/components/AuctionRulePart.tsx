
export default function AuctionRulePart() {
    return (
        <>
            <div className="p-8">
                <div className="flex justify-start items-center text-2xl font-bold text-white neon-glow mb-4 gap-1">
                    <span className="material-symbols-outlined">
                        counter_1
                    </span>
                    <h2 className="">請先認識「次高價密封拍賣」</h2>
                </div>
                <div className="space-y-4 ">
                    <p>次高價密封拍賣（second-price sealed auction），又稱為維克里拍賣（Vickrey auction）。 競標者不會知道其他人的出價，拍賣時間結束後，出價最高者得標，但支付的價格為所有投標價格中的第二高價。 得標者可以避免因出價過高而產生的風險，放心誠實地報價。</p>
                    <p><span className="text-green-main font-extrabold">重點：</span>得標者，並非付自己出的中標最高價格，而是以第二高出價的金額作付款交易。</p>
                    <p><span className="text-green-main text-green-main font-extrabold">例子：</span></p>
                    <p className="ml-4">「A出了最高的投標價HKD $2,000」 「第二高價是B的HKD $1,500」→ A競投成功得標，只需付 HKD$ 1,500，系統自動於A提供之信用卡自動收取 HKD 1,500。</p>
                    <p className="ml-4">若只有一人出價，無人參與任何競投，此情況將以唯一出價作為勝出價格。</p>
                </div>
            </div>

            <div className="p-8">
                <div className="flex justify-start items-center text-2xl font-bold text-white neon-glow mb-4 gap-1">
                    <span className="material-symbols-outlined">
                        counter_2
                    </span>
                    <h2 className="">拍賣流程</h2>
                </div>
                <div className="space-y-4 ">
                    <p><span className="text-green-main font-extrabold">步驟一：</span>註冊並登入您的帳戶。</p>
                    <p><span className="text-green-main font-extrabold">步驟二：</span>設定付款方式（信用卡或其他支援的付款方法）。</p>
                    <p><span className="text-green-main font-extrabold">步驟三：</span>選擇心儀的親簽戰衣並提交競標金額。</p>
                    <p><span className="text-green-main font-extrabold">步驟四：</span>註等待拍賣結束並接收競標結果通知。</p>
                    <p><span className="text-green-main font-extrabold">步驟五：</span>得標者將收到付款確認及商品配送資訊。</p>
                </div>
            </div>

            <div className="p-8">
                <div className="flex justify-start items-center text-2xl font-bold text-white neon-glow mb-4 gap-1">
                    <span className="material-symbols-outlined">
                        counter_3
                    </span>
                    <h2 className="">出價規則</h2>
                </div>
                <div className="space-y-4 ">
                    <p><span className="text-green-main font-extrabold">最低出價：</span>HKD $500。</p>
                    <p><span className="text-green-main font-extrabold">每次加價：</span>每次出價須以HKD $100 的倍數為單位，即不可出HKD $105、HKD $250 這種金額。</p>
                    <p><span className="text-green-main font-extrabold">只能加價，不能減價</span>（例如，不能從 HKD$800 改成 HKD $600）。</p>
                    <p>出價後系統會記錄您的最高有效出價，即使有人暫時超越您的出價，您的最高出價還是保留着。</p>
                </div>
            </div>

            
        </>
    )
}