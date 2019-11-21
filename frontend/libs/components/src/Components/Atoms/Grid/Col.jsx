import React from 'react'
import { Col } from 'antd'

const CBMCol = ({ ...props }) => <Col {...props} />

CBMCol.propTypes = Col['propTypes']

export default CBMCol
