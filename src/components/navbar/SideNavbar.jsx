import { useEffect } from "react"
import { Link } from "react-router-dom"
export default function SideNavbar({show}) {
  return (
    <>
    
    <nav className={(show ? " right-0 " : " -right-72 opacity-0 w-0 ") + " w-72 border transition-all  absolute z-20 right-0 top-1 duration-400 bg-white"}>
    <div className={(show ? ' ' : " opacity-0 w-0")}>
        <div className={(show ? "  " : " hidden ") + "flex px-3 py-2"}>
            <Link className="btn-blue p-5 block w-1/2" to={"/login"} >ورود</Link>
            <Link className="btn-border-blue p-5 block w-1/2" to={"/login"} >ثبت نام</Link>
        </div>
        <ul className={(show ? "  " : " hidden ") +'flex flex-col gap-2 pr-4 font-semibold text-lg'}>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
        </ul>
    </div>
</nav>
</>
  )
}
