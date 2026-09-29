import Link from "next/link";
import { ImStatsDots } from "react-icons/im";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";


const Navbar = () => {
    return (
        <div className="w-[90%] mx-auto">
            <div className="navbar bg-white">
                <div className="navbar-start">

                    <Link href="/" className="btn btn-ghost text-xl text-[#244D3F]"><span className="text-black">Keen</span>Keeper</Link>
                </div>

                <div className="navbar-end gap-3">
                    <Link href="/home" className="flex items-center gap-1"><RiHome2Line className="text-xl"/>Home</Link>
                    <Link href="/timeline" className="flex items-center gap-1"><RiTimeLine /> Timeline</Link>
                    <Link href="/stats" className="flex items-center gap-1"><ImStatsDots /> Stats</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;