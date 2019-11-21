import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

const CBMScroll = ({ className, ...props }) => {
	const classes = classNames('cbm-scroll', className);
	return <PerfectScrollbar className={classes} {...props} />;
};

CBMScroll.propTypes = {
	className: PropTypes.string
};
CBMScroll.defaultProps = {};

export default CBMScroll;
