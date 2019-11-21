import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { CBMListItemMeta } from '../../Atoms/List'
import { CBMNavListItem } from '../../Atoms/NavListItem'

import firefighter from '../../../Assets/firefighter-happy.svg'
import CBMTypography from '../../Atoms/Typography/Typography'
import CBMBadge from '../../Atoms/Badge/Badge'

const CBMUserListItem = ({ className, name, type, phone, color, ...props }) => {
    const classes = classNames('cbm-user-list-item', className)
    return (
        <CBMNavListItem className={classes} {...props}>
            <CBMListItemMeta
                avatar={<img src={firefighter} alt='user-list-item-avatar' />}
                title={
                    <CBMTypography variant='body' strong>
                        {name}
                        <CBMBadge className='ml-sm' color={color}>
                            <CBMTypography component='span' variant='overline'>
                                {type}
                            </CBMTypography>
                        </CBMBadge>
                    </CBMTypography>
                }
                description={
                    <CBMTypography variant='body'>{phone}</CBMTypography>
                }
            />
        </CBMNavListItem>
    )
}

CBMUserListItem.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    phone: PropTypes.string,
    color: PropTypes.oneOfType(['primary', 'secondary'])
}
CBMUserListItem.defaultProps = {
    name: 'Default name',
    type: 'BM',
    phone: '(00) 0 0000 0000',
    color: 'secondary'
}

export default CBMUserListItem
