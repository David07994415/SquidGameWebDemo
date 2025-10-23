import { useState, useEffect, useRef } from 'react'
import LogoWhite from '../assets/Logo_white.png'
import Circle from '../assets/circle.svg'
import Square from '../assets/square.svg'
import Rect from '../assets/rect.svg'
import HeroBanner from '../assets/hero_banner.webp'
import ChineseBanner from '../assets/Chinese_Logo S2.png'
import Director from '../assets/directors.jpg'
import Cloth1 from '../assets/Cloth1.png'
import Cloth2 from '../assets/Cloth2.png'
import QAPart from '../components/QAPart'
import { createClient } from '@supabase/supabase-js'

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {

  type questionType = {
    id: number,
    question: string,
    answer: string,
  }

  const [toggleHamburger, setToggleHamburger] = useState<boolean>(false);
  const [questions,setQuestions] = useState<questionType[]>([]);

  const countdownRef = useRef<HTMLDivElement>(null);
  const endTime = new Date('2025-11-26T23:59:00+08:00').getTime();
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

  const fetchData = async () => {
    const supabase_client = createClient(apiUrl, apiKey);
    const { data, error } = await supabase_client.from('question').select("*");
    if (error) {
      console.error(error.message);
      return;
    }
    setQuestions(data)
  }
  useEffect(() => {
    // fetchData();
  }, [])

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

  const trackRef = useRef<HTMLDivElement>(null);
  const clothSelectionRef = useRef<HTMLDivElement>(null);
  let currentIndex = 0;
  const images = [Cloth1, Cloth2];
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
    <div className='bg-stone-700 min-h-screen relative'>

      {/* ICON 背景 區塊 */}
      <div className="iconPosition span-animation top-[33%] left-[20%]"><img className="w-full span-animation" src={Circle} alt="CircleIcon" /></div>
      <div className="iconPosition span-animation top-[50%] left-[30%]"><img className="w-full" src={Square} alt="SquareIcon" /></div>
      <div className="iconPosition span-animation top-[75%] left-[25%]"><img className="w-full" src={Rect} alt="RectIcon" /></div>
      <div className="iconPosition span-animation top-[36%] right-[18%]"><img className="w-full span-animation" src={Rect} alt="RectIcon" /></div>
      <div className="iconPosition span-animation top-[53%] right-[35%]"><img className="w-full" src={Circle} alt="CircleIcon" /></div>
      <div className="iconPosition span-animation top-[80%] right-[28%]"><img className="w-full" src={Square} alt="SquareIcon" /></div>


      {/* 背景圖片 */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${HeroBanner})` }}
      ></div>

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

      {/* Btn 藝人 */}
      {/* <div className="fixed bottom-0 left-0 w-full z-40">
        <div className="max-w-md mx-auto px-4 py-3 shock-animation">
          <button className="rounded-md bg-pink-500 text-white text-lg p-3 w-full">
            立刻選擇你的藝人
          </button>
        </div>
      </div> */}

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

      {/* gap */}
      <div className="h-screen"></div>

      {/* 導演的話 */}
      <div className="relative z-30 text-white w-full flex flex-col lg:flex-row bg-black">
        <div className="w-full lg:min-w-1/2 flex flex-col items-starts justify-center gap-8 px-5 py-8">
          <div className="text-5xl text-pink-500 italic">"</div>
          <div className="text-xl">五年來，「試玩毛」團隊成功創作出一個又一個我們引以為傲的本地遊戲綜藝節目奇蹟。臨別秋波，我們致力再創新高，製作試玩毛最終回——《墨魚遊戲2》，以「魷魚遊戲」為藍本，創作屬於香港人的兒時遊戲大逃殺！</div>
          <div className="text-xl">今次製作斥資 <span className="text-pink-500 font-semibold">7位數字</span>，沒有接收任何廣告客戶。我們冒險摒棄一般募資方法，嘗試以拍賣形式幫補製作。承蒙 <span className="text-pink-500 font-semibold">100位藝人</span> 鼎力相助，願意捐出簽名戰衣支援。若然有幸填補製作成本，所有拍賣盈餘皆會捐給慈善機構 <span className="text-pink-500 font-semibold">「語橋社資」</span> 作慈善用途。</div>
          <div className="text-xl">全靠大家的支持，我們才有機會將夢想實踐！多謝！</div>
          <div className="self-end text-2xl font-semibold text-pink-main">— 試當真的話</div>
        </div>
        <div
          className="w-full lg:min-w-1/2 h-[50vh] lg:h-auto bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${Director})` }}
        ></div>
      </div>

      {/* 拍賣規則 */}
      <div className="relative z-30 w-full my-12">
        <div className='flex flex-col justify-center items-center gap-10 max-w-5xl mx-auto'>
          <h2 className="text-4xl text-center text-pink-main neon-glow font-[1200]" >案標拍賣規則</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="auctioncard">
              <div className=''>
                <span className="material-symbols-outlined text-green-main" style={{ fontSize: "64px" }}>Favorite</span>
              </div>
              <h3 className='text-3xl  text-green-main'>即時支持</h3>
              <p className="text-white text-sm text-center">競標者不論中標與否，仍可選擇將出價金額捐出支持拍攝計劃</p>
            </div>
            <div className="auctioncard bg-black">
              <div className=''>
                <span className="material-symbols-outlined text-pink-main" style={{ fontSize: "64px" }}>shield</span>
              </div>
              <h3 className='text-3xl  text-pink-main'>次高價密封拍賣</h3>
              <p className="text-white text-sm text-center">競標者不知道他人出價<br />出價最高者中標後<br />只需支付所有出價中第二高價格</p>
            </div>
            <div className="auctioncard">
              <div className=''>
                <span className="material-symbols-outlined text-green-main" style={{ fontSize: "64px" }}>Mail</span>
              </div>
              <h3 className='text-3xl text-green-main'>拋離通知</h3>
              <p className="text-white text-sm text-center">若您曾是最高出價者但被超越<br />系統會透過 Email 通知您</p>
            </div>
            <div className="auctioncard">
              <div className=''>
                <span className="material-symbols-outlined text-pink-main" style={{ fontSize: "64px" }}>Gavel</span>
              </div>
              <h3 className='text-3xl  text-pink-main'>拍賣規則</h3>
              <p className="text-white text-sm text-center">詳細了解拍賣流程與相關規定</p>
              <a className="text-pink-main text-sm text-center">了解更多</a>
            </div>
            <div className="auctioncard">
              <div className=''>
                <span className="material-symbols-outlined text-green-main" style={{ fontSize: "64px" }}>Credit_Card</span>
              </div>
              <h3 className='text-3xl  text-green-main'>付款方式</h3>
              <p className="text-white text-sm text-center">支援多種安全的付款選項<br />確保交易順利進行</p>
              <a className="text-green-main text-sm text-center">了解更多</a>
            </div>
            <div className="auctioncard">
              <div className=''>
                <span className="material-symbols-outlined text-pink-main" style={{ fontSize: "64px" }}>Local_Shipping</span>
              </div>
              <h3 className='text-3xl  text-pink-main'>運送資訊</h3>
              <p className="text-white text-sm text-center">了解商品包裝、<br />運送時間與配送相關資訊</p>
              <a className="text-pink-main text-sm text-center">了解更多</a>
            </div>
          </div>
        </div>

      </div>

      {/* 衣服展示 */}
      <div className='relative w-full flex justify-center items-center bg-stone-800'>
        <div className="w-full lg:min-w-1/2">
          <div className='flex flex-col justify-center items-center gap-3 p-3'>
            <div className="relative">
              <div className='bg-black overflow-hidden '>
                <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
                  <img className='max-w-full' src={Cloth1} alt="Cloth1" />
                  <img className='max-w-full' src={Cloth2} alt="Cloth2" />
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
                {/* 
                  <div className='w-[16px] h-[16px] rounded-full bg-stone-500 transition-transform duration-500 ease-in-out' onClick={()=>{}}></div>
                  <div className='w-[16px] h-[16px] rounded-full bg-stone-500 transition-transform duration-500 ease-in-out'></div> */}
              </div>
            </div>
            <div className="text-sm text-white">*參賽者戰衣示意圖</div>
          </div>
        </div>
        <div className="hidden lg:block lg:min-w-1/2 text-white">
          <div className='flex flex-col justify-center items-center p-3' >
            <h3 className='text-pink-main text-3xl'>獨一無二的藝人親簽戰衣</h3>
            <p className='text-white'>每位藝人都已在外套上簽名或留言，連帶淘汰時所染血跡(勝出者已加上電腦特效以防劇透)，清楚記錄出局時的喜怒哀樂！</p>
          </div>
        </div>
      </div>

      {/* 藝人Card */}
      <div className="relative z-40 w-full my-12">
        <div className='flex flex-col justify-center items-center gap-10 max-w-5xl mx-auto'>
          <h2 className="text-4xl text-center text-pink-main neon-glow font-[1200]" >常見問題
          </h2>
        </div>
      </div>
      
      {/* 常見問題 */}
      <div className="relative z-40 w-full my-12">
        <div className='flex flex-col justify-center items-center gap-10 max-w-5xl mx-auto'>
          <h2 className="text-4xl text-center text-pink-main neon-glow font-[1200]" >常見問題
          </h2>
          <div className='flex flex-col justify-center items-center gap-2 max-w-4xl w-full p-5'>
            {
              questions.map((q)=>{
                return (
                  <QAPart key={q.id} question={q.question} answer={q.answer}></QAPart>
                )
              })
            }
          </div>
        </div>
      </div>



    </div >
  )
}
