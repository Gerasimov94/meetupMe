import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import Main from './src/modules/Main/components/Main';
import {fetchMeetups} from './src/modules/Main/api/mainLayoutApi';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class App extends React.Component {
	state = {
		meetups: [],
		isFetching: true,
	}

	async componentDidMount() {
		const {meetups} = await fetchMeetups();

		this.setState({meetups, isFetching: false});
	}

	render() {
		if (this.state.isFetching) {
			return (
				<View style={styles.container}>
					<ActivityIndicator size='large' />
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<Main />
				{this.state.meetups.map(item => <Text key={item.title}>{item.title}</Text>)}
			</View>
		);
	}
}
