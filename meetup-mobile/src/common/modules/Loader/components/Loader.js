import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from '../styles/styles';

export const Loader = () => (
	<View styles={styles.loader}>
		<ActivityIndicator />
	</View>
);
