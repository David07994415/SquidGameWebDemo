type PageTitlePartPropType = {
    mainTitles: string[],
    subTitle: string,
    description: string,
}

export default function PageTitlePart(props: PageTitlePartPropType) {
    return (
        <>
            <div className="flex flex-col gap-5 items-center justify-center max-w-[800px]" id="title">
                <div className="flex flex-col gap-0 items-center justify-center">
                    {
                        props.mainTitles.map((title) => {
                            return (
                                <h2 key={title} className="text-pink-main text-5xl font-extrabold">{title}</h2>
                            )
                        })
                    }
                </div>
                
                <h3 className="text-white text-xl font-bold filter_green">{props.subTitle}</h3>
                <p className="text-stone-500 text-sm text-center">{props.description}</p>
            </div>
        </>
    )

}