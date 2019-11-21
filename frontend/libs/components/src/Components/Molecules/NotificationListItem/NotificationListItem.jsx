import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { CBMListItem } from '../../Atoms/List';
import { CBMTypography } from '../../Atoms/Typography';
import { CBMBadge } from '../../Atoms/Badge';
import { CBMBox } from '../../Atoms/Box';

const CBMNotificationListItem = ({ className, color, title, description, ...props }) => {
	const classes = classNames('cbm-notification-list-item', className, {
		[`cbm-notification-list-item--${color}`]: color
	});
	return (
		<CBMListItem asCards={false} rounded={false} className={classes} {...props}>
			<CBMBox>
				<CBMTypography ellipsis variant="body" strong>
					{title}
				</CBMTypography>
				<CBMBadge className="mt-xs mb-xs" color="primary">
					Particular
				</CBMBadge>
				<CBMTypography
					className="cbm-notification-list-item--description"
					variant="caption"
					ellipsis
					maxLine={3}
				>
					{description}
				</CBMTypography>
			</CBMBox>
		</CBMListItem>
	);
};

CBMNotificationListItem.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string
};
CBMNotificationListItem.defaultProps = {};

export default CBMNotificationListItem;
