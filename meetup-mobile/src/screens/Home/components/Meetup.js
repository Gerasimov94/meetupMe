import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, Dimensions, Linking} from 'react-native';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';

const meetupCardWidth = Dimensions.get('window').width;

const styles = ExtendedStyleSheet.create({
	item: {
		borderColor: '$green600',
		borderStyle: 'solid',
		borderWidth: 1,
		flex: 1,
		width: (meetupCardWidth - 50),
		marginHorizontal: 20,
	},
	itemTitle: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: '$green600',
	},
	itemContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemImage: {
		width: (meetupCardWidth / 2),
		height: (meetupCardWidth / 2),
	},
	itemDescription: {
		fontStyle: 'italic',
		fontSize: 16,
	},
	speaker: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	speakerName: {
		marginLeft: 5,
		fontStyle: 'italic',
		fontSize: 14,
	},
	speakersContaner: {
		marginTop: 20,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
});

export default class Meetup extends Component {
	static propTypes = {
		item: PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
		}).isRequired,
	}

	static speakersUrl = [
		{
			name: 'Michel Westrate',
			uri: 'https://pbs.twimg.com/profile_images/1076641224675770368/FCNep-bB_400x400.jpg',
			github: 'https://github.com/mweststrate',
		},
		{
			name: 'Vadim Makeev aka Sharpei',
			uri: 'https://pp.userapi.com/c848528/v848528666/65b7/C05wXe2EwY4.jpg?ava=1',
			github: 'https://github.com/pepelsbey',
		},
		{
			name: 'Dan Abramov',
			uri: 'https://pbs.twimg.com/profile_images/1096807971374448640/rVCDhxkG_400x400.png',
			github: 'https://github.com/gaearon',
		},
	];

	goToGithub = github => async () => {
		try {
			await Linking.openURL(github);
		} catch (error) {
			throw new Error(error);
		}
	}

	render() {
		const {item} = this.props;

		return (
			<View style={styles.item}>
				<View style={styles.itemTitle}>
					<Text style={styles.itemTitle}>
						{item.title}
					</Text>
				</View>
				<View style={styles.itemContent}>
					<Image
						source={{uri: 'https://pbs.twimg.com/media/DeHAbBQWsAAitJl.jpg'}}
						style={styles.itemImage}
					/>
					<View>
						<Text style={styles.itemDescription}>
							{item.description}
						</Text>
					</View>
					<View style={styles.speakersContaner}>
						<Text style={styles.itemDescription}>Line up:</Text>
						{this.constructor.speakersUrl.map(({uri, name, github}) => (
							<View style={styles.speaker} key={name}>
								<Image
									style={{width: 50, height: 50}}
									source={{uri}}
								/>
								<Text
									onPress={this.goToGithub(github)}
									style={styles.speakerName}
								>
									{name}
								</Text>
							</View>
						))}
					</View>
				</View>
			</View>
		);
	}
}
