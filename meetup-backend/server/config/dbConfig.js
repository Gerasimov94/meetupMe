import mongoose from 'mongoose';
/* eslint-disable no-console */
export default () => {
	mongoose.connect('mongodb://localhost/meetupME', {useNewUrlParser: true});

	mongoose.connection
		.on('error', (error) => console.error(`Connection failed, m8!, Error is: ${error}`))
		.once('open', () => console.log('We are connected to DB, m8!'));
}
