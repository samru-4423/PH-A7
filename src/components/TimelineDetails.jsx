// "use client";

// import { useEffect, useState } from "react";
// import { LuPhoneCall } from "react-icons/lu";
// import { MdOutlineTextsms } from "react-icons/md";
// import { CiVideoOn } from "react-icons/ci";
// import { RiArrowDropDownLine } from "react-icons/ri";

// const TimelineDetails = () => {
//     const [activities, setActivities] = useState([]);
//     const [sortingType, setSortingType] = useState([]);
//     console.log("Sorting type", sortingType)

//     useEffect(() => {
//         const loadActivities = () => {
//             const allActivities = [];

//             for (let i = 0; i < localStorage.length; i++) {
//                 const key = localStorage.key(i);

//                 if (key && key.startsWith("timeline-")) {
//                     const storedData = localStorage.getItem(key);

//                     if (storedData) {
//                         try {
//                             const friendActivities = JSON.parse(storedData);

//                             if (Array.isArray(friendActivities)) {
//                                 allActivities.push(...friendActivities);
//                             }
//                         } catch (error) {
//                             console.error(
//                                 "Error parsing timeline data:",
//                                 error
//                             );
//                         }
//                     }
//                 }
//             }

//             allActivities.sort(
//                 (a, b) => new Date(a.date) - new Date(b.date)
//             );

//             setActivities(allActivities);
//         };

//         loadActivities();

//         const handleActivityAdded = () => {
//             loadActivities();
//         };

//         window.addEventListener(
//             "activityAdded",
//             handleActivityAdded
//         );

//         return () => {
//             window.removeEventListener(
//                 "activityAdded",
//                 handleActivityAdded
//             );
//         };
//     }, []);

//     const getIcon = (type) => {
//         if (type === "Call") {
//             return <LuPhoneCall className="text-xl" />;
//         }

//         if (type === "Text") {
//             return <MdOutlineTextsms className="text-xl" />;
//         }

//         if (type === "Video") {
//             return <CiVideoOn className="text-xl" />;
//         }

//         return null;
//     };

//     return (
//         <div className=" bg-gray-200 rounded-[5px] mt-4">

//             {/* <h2 className="text-green-600 text-2xl font-semibold mb-5">
//                 Recent Activity
//             </h2> */}

//             <div className="dropdown dropdown-center">
//                 <div tabIndex={0} role="button" className="flex items-center justify-between w-[150%] px-2 mb-5 bg-transparent shadow-sm border-2 border-gray-300 text-black">Filter timeline {sortingType}  <span><RiArrowDropDownLine className="text-3xl"/></span></div>
//                 <ul tabIndex={-1} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
//                     <li onClick={() => setSortingType('call')}><a>Call</a></li>
//                     <li onClick={() => setSortingType('text')}><a>Text</a></li>
//                     <li onClick={() => setSortingType('video')}><a>Video</a></li>
//                 </ul>
//             </div>

//             {activities.length === 0 ? (
//                 <p className="text-gray-500">
//                     No activity yet.
//                 </p>
//             ) : (
//                 <div className="space-y-6">

//                     {activities.map((activity, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center gap-4 bg-white p-4 rounded-[5px]"
//                         >

//                             <div className="bg-green-100 text-green-600 p-3 rounded-full">
//                                 {getIcon(activity.type)}
//                             </div>

//                             <div>
//                                 <p className="font-semibold">
//                                     {activity.type} <span className="font-light">with {activity.friend?.name}</span>
//                                 </p>

//                                 <p className="text-sm text-gray-500">
//                                     {new Date(activity.date).toLocaleDateString("en-US", {
//                                         year: "numeric",
//                                         month: "long",
//                                         day: "numeric",
//                                     })}
//                                 </p>
//                             </div>

//                         </div>
//                     ))}

//                 </div>
//             )}

//         </div>
//     );
// };

// export default TimelineDetails;


"use client";

import { useEffect, useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const TimelineDetails = () => {
    const [activities, setActivities] = useState([]);
    const [sortingType, setSortingType] = useState("All");

    useEffect(() => {
        const loadActivities = () => {
            const allActivities = [];

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);

                if (key && key.startsWith("timeline-")) {
                    const storedData = localStorage.getItem(key);

                    if (storedData) {
                        try {
                            const friendActivities = JSON.parse(storedData);

                            if (Array.isArray(friendActivities)) {
                                allActivities.push(...friendActivities);
                            }
                        } catch (error) {
                            console.error(
                                "Error parsing timeline data:",
                                error
                            );
                        }
                    }
                }
            }

            // Newest activity first
            allActivities.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );

            setActivities(allActivities);
        };

        loadActivities();

        const handleActivityAdded = () => {
            loadActivities();
        };

        window.addEventListener(
            "activityAdded",
            handleActivityAdded
        );

        return () => {
            window.removeEventListener(
                "activityAdded",
                handleActivityAdded
            );
        };
    }, []);

    const getIcon = (type) => {
        if (type === "Call") {
            return <LuPhoneCall className="text-xl" />;
        }

        if (type === "Text") {
            return <MdOutlineTextsms className="text-xl" />;
        }

        if (type === "Video") {
            return <CiVideoOn className="text-xl" />;
        }

        return null;
    };

    // Filter activities based on selected type
    const filteredActivities =
        sortingType === "All"
            ? activities
            : activities.filter(
                  (activity) =>
                      activity.type.toLowerCase() ===
                      sortingType.toLowerCase()
              );

    return (
        <div className="bg-gray-200 rounded-[5px] mt-4">

            {/* Filter dropdown */}
            <div className="dropdown dropdown-center">
                <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center justify-between w-[150%] px-2 mb-5 bg-transparent shadow-sm border-2 border-gray-300 text-black"
                >
                    Filter timeline: {sortingType}

                    <span>
                        <RiArrowDropDownLine className="text-3xl" />
                    </span>
                </div>

                <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm"
                >
                    <li onClick={() => setSortingType("All")}>
                        <a>All</a>
                    </li>

                    <li onClick={() => setSortingType("Call")}>
                        <a>Call</a>
                    </li>

                    <li onClick={() => setSortingType("Text")}>
                        <a>Text</a>
                    </li>

                    <li onClick={() => setSortingType("Video")}>
                        <a>Video</a>
                    </li>
                </ul>
            </div>

            {/* Timeline */}
            {filteredActivities.length === 0 ? (
                <p className="text-gray-500">
                    No {sortingType === "All" ? "" : sortingType.toLowerCase()} activity yet.
                </p>
            ) : (
                <div className="space-y-6">

                    {filteredActivities.map((activity, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white p-4 rounded-[5px]"
                        >

                            <div className="bg-green-100 text-green-600 p-3 rounded-full">
                                {getIcon(activity.type)}
                            </div>

                            <div>
                                <p className="font-semibold">
                                    {activity.type}{" "}
                                    <span className="font-light">
                                        with {activity.friend?.name}
                                    </span>
                                </p>

                                <p className="text-sm text-gray-500">
                                    {new Date(
                                        activity.date
                                    ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};

export default TimelineDetails;
