import Star from '../assets/001_main.webp'
import { Link } from 'react-router'

type StarCardProps = {
    id: number,
    imgUrl:string,
}

export default function StarCard(props: StarCardProps) {
    return (
        <>
            <Link to={`star/${props.id}`} >
                <div className='relative max-w-[250px]'>
                    <img className='w-full rounded-xl transform hover:scale-105 transition duration-300 ease-in-out hover:border-pink-main hover:border-2' 
                    // src={Star} 
                    src = {props.imgUrl}
                    alt="Star" loading="lazy" />
                    <p className='absolute z-40 top-[80%] left-[50%] -translate-x-1/2 text-green-main text-3xl font-digits'>{props.id.toString().padStart(3,"0")}</p>
                </div>
            </Link>
        </>
    )
}