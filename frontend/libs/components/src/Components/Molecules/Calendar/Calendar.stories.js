import React from "react"
import { storiesOf } from "@storybook/react"
import CBMCalendar from "./Calendar"

const Example = () => {
    const myEventsList = [
        {
            title: "Xptoooo",
            start: new Date(),
            end: new Date("2019-10-28 00:00:00"),
            allDay: false,
            id: 1
        },
        {
            title: "Xptoooo",
            start: new Date(),
            end: new Date("2019-10-29 23:59:00"),
            allDay: false,
            id: 2
        }
    ]

    return (
        <CBMCalendar
            events={myEventsList}
            onView={e => console.log(e)}
            onSelectEvent={e => console.log(e)}
        />
    )
}

storiesOf("Molecules.Calendar", module).add("Simple", () => <Example />)
