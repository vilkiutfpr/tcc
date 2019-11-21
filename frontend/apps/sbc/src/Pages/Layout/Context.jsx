import React, { createContext, useContext, useState } from "react"

const Context = createContext()

export const useLayoutContext = () => useContext(Context)

const LayoutProvider = ({ children }) => {
    const [headerInfo, setHeaderInfo] = useState({
        title: "Home",
        breadcrumb: {}
    })

    const value = {
        headerInfo,
        setHeaderInfo
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SbcLayoutProvider = LayoutProvider

export const withLayoutProvider = Component => props => (
    <SbcLayoutProvider>
        <Component {...props} />
    </SbcLayoutProvider>
)
