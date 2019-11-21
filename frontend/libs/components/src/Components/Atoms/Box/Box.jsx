import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CBMBox = ({ className, ...props }) => {
	const classes = classNames('cbm-box', className);
	return <div className={classes} {...props} />;
};

CBMBox.propTypes = {
	className: PropTypes.string
};
CBMBox.defaultProps = {};

export default CBMBox;
