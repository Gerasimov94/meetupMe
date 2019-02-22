import React from 'react';
import ExtendedStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';
import Main from './src/screens/Home/components/Home';
import COLORS from './src/common/constants/colors';

ExtendedStyleSheet.build(COLORS);

const styles = ExtendedStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '$white',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 50,
	},
});

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Main />
			</View>
		);
	}
}
