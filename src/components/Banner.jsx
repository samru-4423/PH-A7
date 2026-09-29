
import Link from "next/link";
import { IoIosAdd } from "react-icons/io";


const Banner = () => {
    return (
        <div className="w-[90%] md:w-[82%] lg:w-[74%] mx-auto lg:px-5 text-center">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold pb-5">Friends to keep close in your life</h2>
                <p className="text-[16px] md:text[18px] lg:text-xl pb-5">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>

                <div className="">
                    <Link href="" className="flex items-center bg-[#244D3F] w-[36%] md:w-[20%] lg:w-[13%] p-2 mx-auto rounded-[5px] text-white"><IoIosAdd className="text-2xl" />Add a Friend</Link>
                </div>
            </div>

    );
};

export default Banner;