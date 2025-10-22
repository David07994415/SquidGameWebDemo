import { useState, useEffect, useRef } from 'react'
import LogoWhite from '../assets/Logo_white.png'
import Circle from '../assets/circle.svg'
import Square from '../assets/square.svg'
import Rect from '../assets/rect.svg'
import HeroBanner from '../assets/hero_banner.webp'
import ChineseBanner from '../assets/Chinese_Logo S2.png'

export default function Home() {
  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
  const countdownRef = useRef<HTMLDivElement>(null);
  const endTime = new Date('2025-10-26T23:59:00+08:00').getTime();
  useEffect(() => {
    const timer = setInterval(() => {
      const nowTime = Date.now();
      const diffTime = endTime - nowTime;
      if (countdownRef.current) {
        if (diffTime < 0) {
          countdownRef.current.textContent = '已結束';
          clearInterval(timer);
          return;
        } else {
          const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

          countdownRef.current.textContent = `${days}天 ${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
        }
      }
    }, 1000)
    return () => clearInterval(timer);
  }, [])

  const auctionLinkRef = useRef<HTMLDivElement>(null);
  const policyLinkRef = useRef<HTMLDivElement>(null);
  const auctionLinkBtnHandler = () =>{
    if(auctionLinkRef.current && policyLinkRef.current){
      auctionLinkRef.current.classList.toggle("hidden")
      if(!policyLinkRef.current.classList.contains("hidden")){
        policyLinkRef.current.classList.toggle("hidden")
      }
    }
  }

  const policyLinkBtnHandler = () =>{
    if(policyLinkRef.current && auctionLinkRef.current){
      policyLinkRef.current.classList.toggle("hidden")
      if(!auctionLinkRef.current.classList.contains("hidden")){
        auctionLinkRef.current.classList.toggle("hidden")
      }
    }
  }

  return (
    <div className='bg-black h-[200vh] relative'>
      {/* 背景圖片 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${HeroBanner})` }}
      ></div>

      {/* 導覽列-電腦 */}
      <div className="sticky inset-0 z-40 max-w-7xl mx-auto">
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
              <li><button className='hover:neon-glow relative' onClick={()=>{auctionLinkBtnHandler()}} >拍賣資訊 V</button>
                <div ref={auctionLinkRef} className="hidden absolute buttom-0 flex flex-col justify-center items-start gap-2 rounded-lg border-pink-500 border-2 p-3 bg-black text-xl z-[45] w-[150px]">
                  <div>拍賣規則</div>
                  <div>付款方式</div>
                  <div>運送資訊</div>
                </div>
              </li>
              <li><button className='hover:neon-glow relative' onClick={()=>{policyLinkBtnHandler()}}>政策條款 V</button>
               <div  ref={policyLinkRef} className="hidden absolute buttom-0 flex flex-col justify-center items-start gap-2 rounded-lg border-pink-500 border-2 p-3 bg-black text-xl z-[45] w-[150px]">
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
            <button onClick={() => { setToggleHamburger(!toggleHamburger) }}>漢堡</button>
          </div>
        </nav>
      </div>

      {/* 導覽列-手機 */}
      {
        toggleHamburger && (
          <div className='w-full bg-black absolute inset-0 z-50'>
            <button className="text-pink-500" onClick={() => { setToggleHamburger(!toggleHamburger) }} >X</button>
            漢堡 選單
          </div>
        )
      }

      {/* Btn 藝人 */}
      <div className="fixed bottom-0 left-0 w-full z-40">
        <div className="max-w-md mx-auto px-4 py-3 shock-animation">
          <button className="rounded-md bg-pink-500 text-white text-lg p-3 w-full">
            立刻選擇你的藝人
          </button>
        </div>
      </div>

      {/* Banner 文字區塊 */}
      <div className="absolute top-35 z-30 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col justify-center items-center gap-12" >
          <div className='flex flex-col justify-center items-center gap-4' >
            <div className='max-w-[400px]'><img className="w-full" src={ChineseBanner} alt="ChineseBanner" /></div>
            <div className='text-white text-4xl font-extrabold'>100人全明星親簽戰衣拍賣</div>
          </div>
          <div className='flex flex-col justify-center items-center gap-4' >
            <div className="text-white">拍賣結束時間</div>
            <div className="text-pink-500 text-3xl font-black" ref={countdownRef}>剩下...</div>
            <div className="text-white text-xs">拍賣結束時間： 26/10/2025 23:59 香港時間</div>
          </div>
        </div>
      </div>




    </div>
  )
}
