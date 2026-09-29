"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FriendsContext = createContext();

const Provider = ({ children }) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const loadFriends = async () => {
            const res = await fetch("/friends.json");
            const data = await res.json();

            setFriends(data);
        };

        loadFriends();
    }, []);

    return (
        <FriendsContext.Provider value={{ friends }}>
            {children}
        </FriendsContext.Provider>
    );
};

export default Provider;

export const useFriends = () => {
    return useContext(FriendsContext);
};