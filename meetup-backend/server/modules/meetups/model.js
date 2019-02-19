import mongoose, {Schema} from 'mongoose';

const MeetupSchema = new Schema({
	title: {
		type: String,
		required: true,
		minLength: [5, 'Must have a 5 chars at least']
	},
	description: {
		type: String,
		required: true,
		minLength: [10, 'Must have a 10  chars at least']
	},
	eventDate: {
		type: Date,
	},
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group'
	}
}, {timestamps: true})

export default mongoose.model('Meetup', MeetupSchema);
