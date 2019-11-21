import React from "react"

import { CBMList, CBMListItem } from "../../Atoms/List"

const CBMMainMenuNavItems = ({ items, onClick }) => {
    const renderItems = item => {
        return (
            <CBMListItem onClick={onClick} asCards={false} key={1}>
                <div>{item}</div>
            </CBMListItem>
        )
    }

    return <CBMList dataSource={items} renderItem={renderItems} />
}

export default CBMMainMenuNavItems
