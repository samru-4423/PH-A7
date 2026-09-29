import React from 'react';

const TimelineDetails = async({params}) => {
    const { timelineId } = await params;
    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();

    const friend = friends.find(friend => friend.id.toString() === timelineId);
    console.log("FriendInfo", friend);
    return (
        <div>
            <h2>Timeline</h2>
        </div>
    );
};

export default TimelineDetails;