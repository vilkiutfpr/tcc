import React, { createContext, useState, useContext } from "react"

export const ScgAuthContext = createContext()

export const useAuthContext = () => useContext(ScgAuthContext)

export const ScgAuthProvider = ({ children }) => {
    const [me, setMe] = useState({})

    const value = {
        me,
        setMe
    }

    return (
        <ScgAuthContext.Provider value={value}>
            {children}
        </ScgAuthContext.Provider>
    )
}
