import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react"

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;



export default function Admin() {

    type StarsType = {
        id: number,
        code: string,
        name: string,
        imgUrl: string,
    }

    const [stars, setStars] = useState<StarsType[]>([])

    const fetchData = async () => {
        const supabase_client = createClient(apiUrl, apiKey);
        const { data, error } = await supabase_client.from('star').select("*");
        if (error) {
            console.error(error.message);
            return;
        }
        setStars(data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const [img, setImg] = useState<File | null>(null);
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "image" && files && files.length > 0) {
            setImg(files[0]);
            console.log(files[0].name)
        } else if (name === "name") {
            setName(value)
            console.log(value)
        } else if (name === "code") {
            setCode(value)
            console.log(value)
        }
    }

    const submitInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        insertData()
    }

    const insertData = async () => {
        const supabase_client = createClient(apiUrl, apiKey);

        // 1. 上傳圖片到 Supabase Storage
        const { data, error } = await supabase_client.storage
            .from('starImg')
            .upload(`stars/${code}`, img)

        if (error) {
            console.error('圖片上傳失敗:', error)
            return
        }

        // 2. 取得圖片公開 URL
        const imgUrl = supabase_client.storage
            .from('starImg')
            .getPublicUrl(`stars/${code}`).data.publicUrl

        // 3. 插入資料到資料表（假設表名是 'stars'）
        const { error: insertError } = await supabase_client
            .from('star')
            .insert([{ name, code, imgUrl }])

        if (insertError) {
            console.error('資料插入失敗:', insertError)
        } else {
            console.log('資料插入成功')
        }

    }


    return (
        <>
            <div className="relative z-40 flex flex-col justify-center items-center max-w-[800x] w-full gap-4 my-25 bg-white">
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <input type="file" name="image" onChange={(e) => { handleInput(e) }} />
                    <input type="text" name="name" placeholder="請輸入使用者名稱" onChange={(e) => { handleInput(e) }} />
                    <input type="text" name="code" placeholder="請輸入使用者代號" onChange={(e) => { handleInput(e) }} />
                    <button onClick={(e) => { submitInput(e) }}>進行上傳</button>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 max-w-[300px] w-full">
                    {
                        stars.map((s) => {
                            return (
                                <div key={s.id} className="flex flex-col justify-center items-center w-full">
                                    <img className="w-full" src={s.imgUrl} alt="starImg" />
                                    <p>姓名:{s.name} 代號:{s.code}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}