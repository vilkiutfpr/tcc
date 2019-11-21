import React, { useEffect } from "react"
import { useLayoutContext } from "Pages/Layout/Context"

const ScgHome = () => {
    const { setHeaderInfo } = useLayoutContext()

    useEffect(() => {
        setHeaderInfo({
            onBack: null,
            title: "Home"
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>Home...</div>
}

export default ScgHome
