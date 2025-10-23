import { useState } from "react"

type QAPartPropsType = {
    question: string,
    answer: string
}

export default function QAPart(props: QAPartPropsType) {
    const [isClick, setIsClick] = useState(false);
    return (
        <>
            <div className="w-full">
                <div className='flex justify-between items-center bg-gray-800 p-2 hover:bg-gray-800/80 rounded-md' onClick={() => setIsClick((prev) => !prev)}>
                    <h4 className={`text-2xl text-white font-extrabold ${isClick?'neon-glow':""}`}>{props.question}</h4>
                    <div className='flex justify-center items-center text-white'>
                        <span className="material-symbols-outlined" style={{ fontSize: "36px" }}>
                            {
                                isClick ? 'remove' : 'add'
                            }
                        </span>
                    </div>
                </div>
                {
                    isClick && (
                        <div className='text-pink-main p-2 bg-black rounded-md whitespace-pre-wrap'>
                            {props.answer}
                        </div>
                    )
                }
            </div>
        </>
    )
}