import React from 'react'
import { List } from 'antd'

const CBMListItemMeta = ({ ...props }) => {
    return <List.Item.Meta {...props} />
}

CBMListItemMeta.propTypes = List.Item.Meta['propTypes']

export default CBMListItemMeta
