import { useRef } from "react";
// import Cloth1 from '../assets/Cloth1.png'
// import Cloth2 from '../assets/Cloth2.png'

type PicSelectionPropsType = {
    images:string[]
}

export default function PicSelection(props:PicSelectionPropsType) {

    const trackRef = useRef<HTMLDivElement>(null);
    const clothSelectionRef = useRef<HTMLDivElement>(null);
    let currentIndex = 0;
    const images = props.images;//[Cloth1, Cloth2];
    const totalLength = images.length;
    const goToArray = (direction: string) => {
        if (!trackRef.current) {
            return;
        } else {
            let nextCount = currentIndex;
            if (direction === 'next') {
                nextCount = nextCount + 1;
                if (nextCount == totalLength) { currentIndex = 0 }
                else { currentIndex = nextCount };
            } else {
                nextCount = nextCount - 1;
                if (nextCount == -1) { currentIndex = 1 }
                else { currentIndex = nextCount };
            }
            // 更新 transform
            trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
            changeClothDotStyle(currentIndex);
        }
    };

    const gotoIndex = (index: number) => {
        // if (!index) return; // 0 會出錯
        if (trackRef.current) {
            currentIndex = index;
            // 更新 transform
            trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        changeClothDotStyle(index);
    }

    function changeClothDotStyle(index: number) {
        if (clothSelectionRef.current) {
            const children = clothSelectionRef.current?.children;
            if (!children) return;

            // 移除所有選中樣式
            Array.from(children).forEach((el) => {
                el.classList.remove('bg-pink-500', 'scale-x-150');
                el.classList.add('bg-stone-500');
            });

            // 套用選中樣式到點擊的那個
            const selected = children[index];
            selected.classList.add('bg-pink-500', 'scale-x-150');
            selected.classList.remove('bg-stone-500');
        }
    }


    return (
        <div className="relative">
            <div className='bg-black overflow-hidden '>
                <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
                    {
                         images.map((i,index)=>{return (
                            <img key={index} className='max-w-full' src={i} alt="Cloth" />
                         )})
                    }
                    
                    {/* <img className='max-w-full' src={Cloth1} alt="Cloth1" />
                    <img className='max-w-full' src={Cloth2} alt="Cloth2" /> */}
                </div>
            </div>
            <div className='absolute z-40 left-[15%] top-[50%] -translate-y-1/2 text-white rounded-full border-white border-2 bg-stone-700 p-2 flex justify-center items-center hover:bg-stone-700/60' onClick={() => goToArray('previous')}>
                <span className="material-symbols-outlined text-white-main" style={{ fontSize: "32px" }}>Chevron_Left</span>
            </div>
            <div className='absolute z-40 right-[15%] top-[50%] -translate-y-1/2 text-white rounded-full border-white border-2 bg-stone-700 p-2 flex justify-center items-center hover:bg-stone-700/60' onClick={() => { goToArray('next') }}>
                <span className="material-symbols-outlined text-white-main" style={{ fontSize: "32px" }}>Chevron_Right</span>
            </div>
            <div ref={clothSelectionRef} className="absolute z-40 left-[50%] top-[90%] -translate-x-1/2 flex justify-center items-center gap-5">
                {
                    images.map((_, index) => {
                        return <div key={index} className='w-[16px] h-[16px] rounded-full bg-stone-500 transition-transform transition-colors duration-500 ease-in-out' onClick={() => { gotoIndex(index) }}></div>
                    })
                }

            </div>
        </div>
    )
}