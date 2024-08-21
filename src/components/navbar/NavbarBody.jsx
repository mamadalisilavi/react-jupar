import { useEffect, useState } from 'react';
import Logo from './Logo';
import { IoMenu } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import SideNavbar from './SideNavbar';
export default function NavbarBody() {
    const [show, setShow] = useState(false)
    const [close, setClose] = useState(false)
    useEffect(()=>{
        console.log("close:"+close)
        console.log("show:"+show)
    },[close,show])
    return (
        <>
            <nav className="w-full h-16 flex items-center justify-between" dir='rtl'>
                <button className='focus:ring-2 focus:ring-blue-400 focus:rounded-full focus:p-2 p-2' onClick={() => setShow(true)}>
                    <IoMenu className='' size={"26px"} />
                </button>
                <div className="flex items-center">
                    <div className='py-1 mr-2'>
                        <Logo />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaRegHeart className='' size={"26px"} />
                    <FiShoppingCart size={"26px"} />
                </div>

            </nav>
            <div onClick={()=>setShow(false)} className={(show ? " w-full h-screen absolute top-0 right-0 z-10  " : "")}></div>
                <SideNavbar show={show} />
         
        </>
    )
}
