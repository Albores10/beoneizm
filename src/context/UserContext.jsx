import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'ŞAFAK BİROL',
        id: 'PILOT_ID_7421',
        citizenId: '8821-X992-IZM',
        level: 12,
        title: 'Sistem Mimarı',
        avatar: 'https://placehold.co/400x400/0a192f/00F0FF?text=USER', // Default Avatar
        stats: {
            xp: '9,450 / 10K',
            tokens: '1,240',
            eco: '840',
            proactive: '920'
        }
    });

    const updateAvatar = (newUrl) => {
        setUser(prev => ({ ...prev, avatar: newUrl }));
    };

    const updateStats = (newStats) => {
        setUser(prev => ({ ...prev, stats: { ...prev.stats, ...newStats } }));
    };

    return (
        <UserContext.Provider value={{ user, updateAvatar, updateStats }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
