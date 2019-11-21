import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import CBMCrud from "./Crud"

const Example = () => {
    const [showAbout, setShowAbout] = useState(false)
    const [showForm, setShowForm] = useState(false)

    return (
        <CBMCrud
            openForm={showForm}
            onOpenForm={setShowForm}
            openAbout={showAbout}
            onOpenAbout={setShowAbout}
            onOpenButtonLabel='Add user'
        />
    )
}

storiesOf("Templates.Crud", module).add("Simple", () => <Example />)
