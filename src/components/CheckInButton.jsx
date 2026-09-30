"use client";

import { toast, ToastContainer } from "react-toastify";
import { CiVideoOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const CheckInButton = ({ friend, type }) => {

    const handleClick = () => {
        // console.log("CHECKIN friend:", friend);
        // console.log("CHECKIN friend:", friend?.friend);
        // console.log("CHECKIN friend.id:", friend?.id);
        // console.log("CHECKIN friend.name:", friend?.name);
        // console.log("CHECKIN friend.email:", friend?.email);
        // console.log("CHECKIN friend.friend:", friend?.friend);

        const existingActivities = JSON.parse(
            localStorage.getItem(`timeline-${friend.id}`) || "[]"
        );


        const newActivity = {
            type: type,
            date: new Date().toISOString().split("T")[0],
            friend: {
                id: friend.id,
                name: friend.name,
                picture: friend.picture,
                email: friend.email,
            },
        };
        console.log("new activity", newActivity)

        existingActivities.push(newActivity);

        localStorage.setItem(
            `timeline-${friend.id}`,
            JSON.stringify(existingActivities)
        );

        // Tell TimelineDetails that a new activity was added
        window.dispatchEvent(new Event("activityAdded"));

        toast(
            <div>
                <FaRegCheckCircle className="text-green-500 mr-2 inline" />
                {type} with {friend.name}
            </div>,
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            }
        );
    };

    let Icon;

    if (type === "Call") {
        Icon = LuPhoneCall;
    } else if (type === "Text") {
        Icon = MdOutlineTextsms;
    } else if (type === "Video") {
        Icon = CiVideoOn;
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleClick}
                className="w-full bg-gray-200 py-10 rounded-[5px] cursor-pointer hover:bg-gray-300"
            >
                <p className="text-[16px] font-semibold flex items-center justify-center">
                    {Icon && <Icon className="text-[22px] mr-2" />}
                    {type}
                </p>
            </button>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default CheckInButton;