// import TimelineDetails from "@/app/timeline/page";
import friends from "./../../../../public/friends.json";
import CheckInButton from "@/components/CheckInButton";
import Image from "next/image";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";


const FriendDetails = async ({ params }) => {
    const { friendId } = await params;

    const friend = friends.find((friend) => friend.id.toString() === friendId);
    //console.log("FriendInfo", friend);

    return (
        <div className="bg-gray-100 py-5 lg:py-15">
            <div className="w-[90%] lg:w-[70%] mx-auto">
                <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-3 p-3 gap-4">
                    {/* <div className=""> */}
                    <div className="col-span-1 row-span-2 bg-white py-5">
                        <div className="flex items-center justify-center">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                height="100"
                                width="100"
                                className="p-3 rounded-full"
                            ></Image>
                        </div>
                        <div className=" text-center">
                            <h2 className="font-bold text-2xl pb-5">{friend.name}</h2>
                            <div
                                className={
                                    friend.status === "overdue"
                                        ? "badge badge-error text-white rounded-4xl"
                                        : friend.status === "almost due"
                                            ? "badge badge-warning text-white rounded-4xl"
                                            : friend.status === "on-track"
                                                ? "badge bg-green-800 text-white rounded-4xl"
                                                : ""
                                }>
                                {friend.status}
                            </div>
                            <div className="flex items-center justify-center gap-2 py-5">
                                {
                                    friend.tags.map((tag, index) => (<div key={index} className="badge bg-green-200 border-none text-black rounded-4xl">{tag}</div>))
                                }
                            </div>
                            <p className="italic pb-5">"{friend.bio}"</p>
                            <p>Preferred: {friend.email}</p>

                        </div>
                    </div>
                    {/* </div> */}
                    {/* <div className=""> */}
                    <div className="grid grid-cols-3 gap-4 col-span-2 row-span-1 text-center">
                        <div className="bg-white py-15 rounded-[5px]">
                            <h2 className="text-[24px] font-bold">{friend.days_since_contact}</h2>
                            <p>Days Since Contact</p>
                        </div>
                        <div className="bg-white py-15 rounded-[5px]">
                            <h2 className="text-[24px] font-bold">{friend.goal}</h2>
                            <p>Goal (Days)</p>
                        </div>
                        <div className="bg-white py-15 rounded-[5px]">
                            <h2 className="text-[24px] font-bold">{friend.next_due_date}</h2>
                            <p>Next Due</p>
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="col-span-2 row-span-1 ">
                        <div className="grid grid-cols-1 bg-white p-5 lg:p-10 rounded-[5px] h-full">
                            <div className="flex justify-between pb-3">
                                <h2 className="text-green-600 text-2xl ">Relationship Goal</h2>
                                <button className="btn bg-gray-200 border-none text-black shadow-none w-[70px]">Edit</button>
                            </div>
                            <p className="text-[22px]">Connect every <span className="font-bold">30 days</span></p>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-1">
                        <div className="grid grid-rows-3 gap-3 text-center h-full">
                            <div className="bg-white rounded-[5px] p-4">
                                <p className="text-[16px] font-semibold flex items-center justify-center"><HiOutlineBellSnooze className="text-[22px] mr-2" /> Snooze 2 Weeks</p>
                            </div>
                            <div className="bg-white rounded-[5px] p-4">
                                <p className="text-[16px] font-semibold flex items-center justify-center"><IoArchiveOutline className="text-[22px] mr-2" /> Archive</p>
                            </div>
                            <div className="bg-white rounded-[5px] p-4">
                                <p className="text-[16px] font-semibold flex items-center justify-center text-red-600"><RiDeleteBin5Line className="text-[22px] mr-2" /> Delete</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-1 bg-white p-8 rounded-[5px]">

                        <h2 className="text-green-600 text-2xl pb-5">
                            Quick Check-In
                        </h2>

                        <div className="grid grid-cols-3 gap-4 text-center">

                            <CheckInButton
                                friend={friend}
                                type="Call"
                            />

                            <CheckInButton
                                friend={friend}
                                type="Text"
                            />

                            <CheckInButton
                                friend={friend}
                                type="Video"
                            />

                        </div>
                    </div>
                </div>
                {/* <TimelineDetails friendId={friend.id}></TimelineDetails> */}
            </div>
        </div>
    );
};

export default FriendDetails;