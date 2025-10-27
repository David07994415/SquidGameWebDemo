import AuctionRulePart from "../components/AuctionRulePart";

export default function AuctionRule() {
    return (
        <>
            <div className="relative w-full my-25">
                <div className="flex flex-col justify-center items-starts gap-6 w-full text-white px-20">
                    <AuctionRulePart></AuctionRulePart>
                </div>
            </div>
        </>
    )
}