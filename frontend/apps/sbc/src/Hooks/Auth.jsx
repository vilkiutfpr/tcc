import React, { createContext, useState, useContext } from "react"

export const SbcAuthContext = createContext()

export const useAuthContext = () => useContext(SbcAuthContext)

export const SbcAuthProvider = ({ children }) => {
    const [me, setMe] = useState()

    const value = {
        me,
        setMe
    }

    return (
        <SbcAuthContext.Provider value={value}>
            {children}
        </SbcAuthContext.Provider>
    )
}
