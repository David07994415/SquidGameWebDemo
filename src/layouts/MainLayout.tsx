import type React from "react"
import './MainLayout.css'
import HeroBanner from '../assets/hero_banner.webp'

type MainLayoutPropsType = {
    children:React.ReactNode
}

export default function MainLayout(props:MainLayoutPropsType){
    return (
        <div className = "bg-black h-[200vh] relative">
            {props.children}
        </div>
    )
}