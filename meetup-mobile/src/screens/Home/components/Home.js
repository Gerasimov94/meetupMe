import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import {fetchMeetups} from '../api/api';
import {Loader} from '../../../common/modules/Loader/components/Loader';
import Meetup from './Meetup';

const styles = ExtendedStyleSheet.create({
	header: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '$green600',
		paddingBottom: 10,
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {},
});


export default class Home extends React.Component {
	state = {
		meetups: [],
		isFetching: true,
	}

	async componentDidMount() {
		const {data: {meetups}} = await fetchMeetups();

		this.setState({meetups, isFetching: false});
	}

	render() {
		const {meetups, isFetching} = this.state;

		return (
			isFetching
				? <Loader />
				: (
					<View style={styles.main}>
						<Text style={styles.header}>MeeupMe</Text>
						<ScrollView style={styles.container} horizontal>
							{meetups.map(item => (
								<Meetup
									key={item._id}
									item={item}
								/>
							))}
						</ScrollView>
					</View>
				)
		);
	}
}
