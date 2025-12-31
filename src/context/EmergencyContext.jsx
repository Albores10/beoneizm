import React, { createContext, useContext, useState } from 'react';

const EmergencyContext = createContext();

export const useEmergency = () => useContext(EmergencyContext);

export const EmergencyProvider = ({ children }) => {
    const [isEmergency, setIsEmergency] = useState(false);

    const toggleEmergency = () => {
        setIsEmergency(prev => !prev);
    };

    return (
        <EmergencyContext.Provider value={{ isEmergency, toggleEmergency }}>
            {children}
        </EmergencyContext.Provider>
    );
};
