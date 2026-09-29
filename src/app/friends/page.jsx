"use client";

import { useFriends } from "@/context/Provider";
import Image from "next/image";
import Link from "next/link";

const Friends = () => {
    const { friends } = useFriends();
    console.log("Friends are", friends);

    return (
        <div className="w-[70%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border-b-2 border-gray-200 py-10 text-center">
                <div className="bg-white p-8 rounded-[5px]">
                    <h2 className="text-3xl font-bold">10</h2>
                    <p>Total Friends</p>
                </div>
                <div className="bg-white p-8 rounded-[5px]">
                    <h2 className="text-3xl font-bold">3</h2>
                    <p>On Track</p>
                </div>
                <div className="bg-white p-8 rounded-[5px]">
                    <h2 className="text-3xl font-bold">8</h2>
                    <p>Need Attention</p>
                </div>
                <div className="bg-white p-8 rounded-[5px]">
                    <h2 className="text-3xl font-bold">12</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>
            <div className="my-8">
                <h2 className="text-2xl font-bold pb-3">Your Friends</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        friends.map(friend =>
                            <Link href={`/friends/${friend.id}`}>
                                <div key={friend.id} className="card bg-white">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={friend.picture}
                                            alt={friend.name}
                                            height="100"
                                            width="100"
                                            className="p-3 rounded-full"
                                        ></Image>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{friend.name}</h2>
                                        <p>{friend.days_since_contact}d ago</p>
                                        <div className="flex gap-2">
                                            {
                                                friend.tags.map((tag, index) => (<div key={index} className="badge bg-green-200 border-none text-black rounded-4xl">{tag}</div>))
                                            }
                                        </div>
                                        <div
                                            className={
                                                friend.status === "overdue"
                                                    ? "badge badge-error text-white rounded-4xl"
                                                    : friend.status === "almost due"
                                                        ? "badge badge-warning text-white rounded-4xl"
                                                        : friend.status === "on-track"
                                                            ? "badge bg-green-800 text-white rounded-4xl"
                                                            : ""
                                            }
                                        >
                                            {friend.status}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Friends;