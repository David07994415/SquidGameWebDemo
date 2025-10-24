import { useRef,useState } from 'react'
import { Outlet } from "react-router"

import LogoWhite from '../assets/Logo_white.png'
import Circle from '../assets/circle.svg'
import Square from '../assets/square.svg'
import Rect from '../assets/rect.svg'


export default function MainLayout() {

    const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);

      const auctionLinkRef = useRef<HTMLDivElement>(null);
      const policyLinkRef = useRef<HTMLDivElement>(null);
      const auctionLinkBtnHandler = () => {
        if (auctionLinkRef.current && policyLinkRef.current) {
          auctionLinkRef.current.classList.toggle("hidden")
          if (!policyLinkRef.current.classList.contains("hidden")) {
            policyLinkRef.current.classList.toggle("hidden")
          }
        }
      }
    
      const policyLinkBtnHandler = () => {
        if (policyLinkRef.current && auctionLinkRef.current) {
          policyLinkRef.current.classList.toggle("hidden")
          if (!auctionLinkRef.current.classList.contains("hidden")) {
            auctionLinkRef.current.classList.toggle("hidden")
          }
        }
      }




    return (
        <div className='bg-stone-700 min-h-screen relative overflow-hidden'>

            {/* ICON 背景 區塊 */}
            <div className="iconPosition span-animation top-[33%] left-[20%]"><img className="w-full span-animation" src={Circle} alt="CircleIcon" /></div>
            <div className="iconPosition span-animation top-[50%] left-[30%]"><img className="w-full" src={Square} alt="SquareIcon" /></div>
            <div className="iconPosition span-animation top-[75%] left-[25%]"><img className="w-full" src={Rect} alt="RectIcon" /></div>
            <div className="iconPosition span-animation top-[36%] right-[18%]"><img className="w-full span-animation" src={Rect} alt="RectIcon" /></div>
            <div className="iconPosition span-animation top-[53%] right-[35%]"><img className="w-full" src={Circle} alt="CircleIcon" /></div>
            <div className="iconPosition span-animation top-[80%] right-[28%]"><img className="w-full" src={Square} alt="SquareIcon" /></div>


            {/* 導覽列-電腦 */}
            <div className="fixed inset-0 z-40 max-w-7xl mx-auto">
                <nav className="flex justify-between items-center p-3">
                    <div className="flex justify-center items-center gap-1">
                        <div className="max-w-[40px]"><img className='w-full' src={LogoWhite} alt="Logo_white" /></div>
                        <div className="min-w-[32px] w-[32px]"><img className='w-full filter_pink' src={Circle} alt="Circle" /></div>
                        <div className="min-w-[32px] w-[32px]"><img className='w-full filter_blue' src={Square} alt="Square" /></div>
                        <div className="min-w-[32px] w-[32px]"><img className='w-full filter_green' src={Rect} alt="Rect" /></div>
                    </div>
                    {!toggleHamburger && (
                        <ul className="hidden lg:flex justify-center items-center gap-4 text-white text-xl font-bold">
                            <li><button className='hover:neon-glow'>首頁</button></li>
                            <li><button className='hover:neon-glow'>參與競標</button></li>
                            <li><button className='hover:neon-glow relative' onClick={() => { auctionLinkBtnHandler() }} >拍賣資訊 V</button>
                                <div ref={auctionLinkRef} className="hidden absolute buttom-0 flex flex-col justify-center items-start gap-2 rounded-lg border-pink-500 border-2 p-3 bg-black text-xl z-[45] w-[150px]">
                                    <div>拍賣規則</div>
                                    <div>付款方式</div>
                                    <div>運送資訊</div>
                                </div>
                            </li>
                            <li><button className='hover:neon-glow relative' onClick={() => { policyLinkBtnHandler() }}>政策條款 V</button>
                                <div ref={policyLinkRef} className="hidden absolute buttom-0 flex flex-col justify-center items-start gap-2 rounded-lg border-pink-500 border-2 p-3 bg-black text-xl z-[45] w-[150px]">
                                    <div>隱私政策</div>
                                    <div>退款政策</div>
                                </div>
                            </li>
                            <li><button className='hover:neon-glow'>常見問題</button></li>
                        </ul>
                    )}
                    <div className="hidden lg:block">
                        <button className="rounded-md bg-pink-500 p-3 text-white">登入 / 註冊</button>
                    </div>
                    <div className="lg:hidden text-white">
                        <button onClick={() => { setToggleHamburger(!toggleHamburger) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-main" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* 導覽列-手機 */}
            {
                toggleHamburger && (
                    <div className='w-full bg-black fixed inset-0 z-[100]'>
                        <div className='flex flex-col h-full'>
                            <div className="flex flex-col gap-3 py-4 items-center">
                                <div className="self-end">
                                    <button className="text-pink-main px-6 text-lg" onClick={() => { setToggleHamburger(!toggleHamburger) }} >X</button>
                                </div>
                                <div>
                                    <button className="rounded-md bg-pink-main p-3 text-white w-[90vw]">登入 / 註冊</button>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col gap-4 p-5 text-white border-t-2 border-gray-800 overflow-y-scroll h-[80vh]">
                                <div className="text-bold text-xl">首頁</div>
                                <div className="text-bold text-xl">參與競標</div>
                                <div className="text-bold text-xl">常見問題</div>
                                <div className="flex flex-col gap-3 text-white pt-3 border-t-2 border-gray-800">
                                    <div className='text-bold text-xl text-pink-main'>拍賣資訊</div>
                                    <div className="flex flex-col gap-3 p-5 pt-0 text-white ">
                                        <div className="text-bold text-xl">拍賣規定</div>
                                        <div className="text-bold text-xl">付款方式</div>
                                        <div className="text-bold text-xl">運送方式</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-white pt-3 border-t-2 border-gray-800">
                                    <div className='text-bold text-xl text-pink-main'>政策條款</div>
                                    <div className="flex flex-col gap-3 p-5 pt-0 text-white ">
                                        <div className="text-bold text-xl">隱私政策</div>
                                        <div className="text-bold text-xl">退款政策</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <Outlet />
        </div>
    )
}