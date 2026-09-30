"use client";

import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Legend } from "recharts";

function Stats() {
    const [activityData, setActivityData] = useState([
        { name: "Text", value: 0, fill: "#550180" },
        { name: "Call", value: 0, fill: "#008222" },
        { name: "Video", value: 0, fill: "#0a4519" },
    ]);

    useEffect(() => {
        const loadStats = () => {
            let callCount = 0;
            let textCount = 0;
            let videoCount = 0;

            // Read all timeline-* localStorage data
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);

                if (key && key.startsWith("timeline-")) {
                    const storedData = localStorage.getItem(key);

                    if (storedData) {
                        try {
                            const activities = JSON.parse(storedData);

                            if (Array.isArray(activities)) {
                                activities.forEach((activity) => {
                                    if (activity.type === "Call") {
                                        callCount++;
                                    } else if (activity.type === "Text") {
                                        textCount++;
                                    } else if (activity.type === "Video") {
                                        videoCount++;
                                    }
                                });
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

            setActivityData([
                {
                    name: "Text",
                    value: textCount,
                    fill: "#550180",
                },
                {
                    name: "Call",
                    value: callCount,
                    fill: "#008222",
                },
                {
                    name: "Video",
                    value: videoCount,
                    fill: "#0a4519",
                },
            ]);
        };

        loadStats();

        window.addEventListener("activityAdded", loadStats);

        return () => {
            window.removeEventListener("activityAdded", loadStats);
        };
    }, []);

    return (
        <div className="bg-white p-4 lg:p-8 rounded-xl">
            <h2 className="text-xl font-semibold">By Interaction Type</h2>
            <PieChart
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "80vh",
                    aspectRatio: 1,
                }}
                responsive className="mx-auto"
            >
                <Pie
                    data={activityData}
                    innerRadius="70%"
                    outerRadius="90%"
                    cornerRadius="5%"
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />

                <Tooltip />

                <Legend />
            </PieChart>
        </div>
    );
}

export default Stats;