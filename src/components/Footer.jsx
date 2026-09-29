import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { VscTwitter } from "react-icons/vsc";


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded py-10 lg:px-50">
            <div className="flex text-4xl md:text-5xl lg:text-7xl">
                <h2 className="font-bold">Keen</h2>
                <h2 className="-ml-2">Keeper</h2>
            </div>
            <p className="text-[14px] md:text-[15px] lg:text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <nav>
                <h2 className="text-2xl">Social Links</h2>
                <div className="grid grid-flow-col gap-3">
                    
                        <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-3xl">
                            <a href=""><TbBrandInstagramFilled className="text-2xl text-black" /></a>
                        </div>
                    
                    
                        <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-3xl">
                            <a href=""><FaSquareFacebook className="text-2xl text-black" /></a>
                        </div>
                    
                    
                        <div className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-3xl">
                            <a href=""><VscTwitter className="text-2xl text-black"/></a>
                        </div>
                    
                </div>
            </nav>
            <aside className="lg:flex lg:items-center lg:justify-between border-t-2 border-green-800 w-full pt-10 text-[16px]">
                <p>© {new Date().getFullYear()} KeenKeeper. All right reserved.</p>
                <div className="space-x-10">
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Services</a>
                    <a href="">Cookies</a>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;