import React from 'react';
import { storiesOf } from '@storybook/react';
import { CBMList, CBMListItem } from './';
import { CBMNavListItem } from '../NavListItem';
import CBMNextAppointmentListItem from '../NextAppointmentListItem/NextAppointmentListItem';
import CBMStatusListItem from '../StatusListItem/StatusListItem';
import CBMAppointmentListItem from '../../Molecules/AppointmentListItem/AppointmentListItem';
import { boolean } from '@storybook/addon-knobs';
import CBMUserListItem from '../../Molecules/UserListItem/UserListItem';
import CBMContingentListItem from '../ContingentListItem/ContingentListItem';
import CBMNotificationListItem from '../../Molecules/NotificationListItem/NotificationListItem';
import {CBMBox} from '../Box';

const Container = ({ children }) => (
	<CBMBox
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}
	>
		<CBMBox style={{ width: '100%', maxWidth: 1024 }}>{children}</CBMBox>
	</CBMBox>
);

storiesOf('Atoms.List', module)
	.add('Item', () => (
		<Container>
			<CBMList
				renderItem={(item, index) => <CBMListItem key={index}>Default list of items</CBMListItem>}
				dataSource={[ {}, {}, {} ]}
			/>
		</Container>
	))
	.add('NavItem', () => (
		<Container>
			<CBMList
				renderItem={(item, index) => <CBMNavListItem key={index}>List with navigation</CBMNavListItem>}
				dataSource={[ {}, {}, {} ]}
			/>
		</Container>
	))
	.add('NextAppoinmentListItem', () => (
		<Container>
			<CBMList
				renderItem={(item, index) => (
					<CBMNextAppointmentListItem
						key={index}
						date="Segunda-feira, 01 de janeiro"
						startTime="08:00"
						endTime="20:00"
					/>
				)}
				dataSource={[ {}, {}, {} ]}
			/>
		</Container>
	))
	.add('StatusListItem', () => (
		<Container>
			<CBMList
				renderItem={(item, index) => (
					<CBMStatusListItem
						key={index}
						title="Lorem Ipsum is simply dummy"
						subtitle="Lorem Ipsum has been the industry, has been the industry"
						status={item.status}
					/>
				)}
				dataSource={[
					{ status: 'success' },
					{ status: 'warning' },
					{ status: 'danger' },
					{ status: 'default' }
				]}
			/>
		</Container>
	))
	.add('AppointmentListItem', () => (
		<Container>
			<CBMList
				renderItem={(item, index) => (
					<CBMAppointmentListItem
						key={index}
						status="success"
						date="Segunda-feira, 01 de janeiro"
						startTime="00:00"
						endTime="00:00"
						recursive={boolean('Recursive', false)}
					/>
				)}
				dataSource={[
					{
						status: 'success'
					},
					{
						status: 'danger'
					}
				]}
			/>
		</Container>
	))
	.add('UserListItem', () => (
		<Container>
			<CBMList renderItem={(item, index) => <CBMUserListItem key={index} />} dataSource={[ {}, {}, {} ]} />
		</Container>
	))
	.add('ContingentListItem', () => (
		<Container>
			<CBMList
				renderItem={(item, index) => (
					<CBMContingentListItem
						key={index}
						count={3}
						title="BMs em serviço"
						description="Vinicius, Wagner, Neodir"
					/>
				)}
				dataSource={[ {}, {}, {} ]}
			/>
		</Container>
	))
	.add('NotificationListItem', () => (
		<Container>
			<CBMList
				dataSource={[
					{
						color: 'success ',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'warning',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							' Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'danger',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'success ',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'warning',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							' Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'danger',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'success ',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'warning',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							' Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					},
					{
						color: 'danger',
						title: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
						description:
							'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.'
					}
				]}
				renderItem={(item) => (
					<CBMNotificationListItem title={item.title} description={item.description} color={item.color} />
				)}
			/>
		</Container>
	));
