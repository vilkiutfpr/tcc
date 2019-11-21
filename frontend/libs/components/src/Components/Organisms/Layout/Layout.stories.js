import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import CBMLayout from './Layout';
import CBMIcon from '../../Atoms/Icon/Icon';
import CBMButton from '../../Atoms/Button/Button';
import { CBMList } from '../../Atoms/List';
import { CBMStatusListItem } from '../../Atoms/StatusListItem';
import { CBMBox } from '../../Atoms/Box';

import brandLogo from '../../../Assets/cbmsc.png';

const navItems = [
	<CBMBox>
		<CBMIcon className="mr-sm" type="home" />
		Home
	</CBMBox>,
	<CBMBox>
		<CBMIcon className="mr-sm" type="user" />
		My Profile
	</CBMBox>
];

const routes = [
	{
		path: '/',
		breadcrumbName: 'Home'
	},
	{
		path: 'sumaries',
		breadcrumbName: 'Summaries'
	}
];

const notifications = [
	{
		color: 'success ',
		title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
		description:
			'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.',
		read: true
	},
	{
		color: 'warning ',
		title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
		description:
			'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.',
		read: false
	},
	{
		color: 'danger ',
		title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
		description:
			'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.',
		read: false
	},
	{
		color: 'success ',
		title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
		description:
			'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.',
		read: true
	}
];

export const CBMLayoutStoriesExample = ({ children }) => {
	const [ notificationOpen, setNotificationOpen ] = useState(false);

	const PageHeaderProps = {
		onBack: console.log,
		title: 'Summary',
		breadcrumb: { routes }
	};

	const NotificationProps = {
		visible: notificationOpen,
		onClose: () => setNotificationOpen((old) => !old),
		AboutNotificationProps: {
			onDelete: (item) => console.log(item),
			onSeen: (item) => console.log(item)
		},
		ReadListProps: {
			dataSource: []
		},
		NotReadListProps: {
			dataSource: notifications
		}
	};

	const MenuProps = {
		navItems,
		brandLogo,
		leftItem: <CBMButton size="large" clear type="ghost" icon="home" />,
		rightItem: (
			<CBMButton
				size="large"
				clear
				type="ghost"
				icon="notification"
				onClick={() => setNotificationOpen((old) => !old)}
			/>
		)
	};

	return (
		<CBMLayout MenuProps={MenuProps} NotificationProps={NotificationProps} PageHeaderProps={PageHeaderProps}>
			{children}
		</CBMLayout>
	);
};

storiesOf('Organisms.Layout', module).add(
	'Simple',
	() => (
		<CBMLayoutStoriesExample>
			<CBMList>
				<CBMStatusListItem
					title="Lorem Ipsum is simply dummy"
					subtitle="Lorem Ipsum has been the industry, has been the industry"
					status="success"
				/>
				<CBMStatusListItem
					title="Lorem Ipsum is simply dummy"
					subtitle="Lorem Ipsum has been the industry, has been the industry"
					status="warning"
				/>
				<CBMStatusListItem
					title="Lorem Ipsum is simply dummy"
					subtitle="Lorem Ipsum has been the industry, has been the industry"
					status="danger"
				/>
				<CBMStatusListItem
					title="Lorem Ipsum is simply dummy"
					subtitle="Lorem Ipsum has been the industry, has been the industry"
					status="default"
				/>
				<CBMStatusListItem
					title="Lorem Ipsum is simply dummy"
					subtitle="Lorem Ipsum has been the industry, has been the industry"
				/>
			</CBMList>
		</CBMLayoutStoriesExample>
	),
	{
		style: {
			padding: 0
		}
	}
);
