'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";

const links = (pathname) => <>
    <Link href="/" className={`flex items-center gap-1 ${pathname === "/" ? 'bg-[#244D3F] text-white p-2 rounded-[5px]' : 'text-black'}`}><RiHome2Line className="text-xl" />Home</Link>
    <Link href="/timeline" className={`flex items-center gap-1 ${pathname === "/timeline" ? 'bg-[#244D3F] text-white p-2 rounded-[5px]' : 'text-black'}`}><RiTimeLine className="text-xl" /> Timeline</Link>
    <Link href="/stats" className={`flex items-center gap-1 ${pathname === "/stats" ? 'bg-[#244D3F] text-white p-2 rounded-[5px]' : 'text-black'}`}><ImStatsDots className="text-xl" /> Stats</Link>
</>

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="w-full md:w-[90%] mx-auto">
            <div className="navbar bg-white p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" className="text-black" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-40 p-2 shadow gap-2">
                            {links(pathname)}
                        </ul>
                    </div>
                    <Link href="/" className="flex text-xl text-[#244D3F]">
                        <h2 className="font-bold text-[#1F2937]">Keen</h2>
                        <h2 className="">Keeper</h2>
                    </Link>
                </div>

                <div className="navbar-end hidden lg:flex lg:gap-3">
                    {links(pathname)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;