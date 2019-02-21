import mongoose, {Schema} from 'mongoose';

const GroupSchema = new Schema({
	name: {
		type: String,
		unique: true,
		required: true,
		minlength: [5, 'Name must be longer than 5 chars']
	},
	description: {
		type: String,
		required: true,
		minlength: [10, 'Description must be longer than 10 chars']
	},
	category: {
		type: String,
	},
	meetups: [{
		type: Schema.Types.ObjectId,
	}]
});

GroupSchema.statics.addMeetup = async function (id, args) {
	const Meetup = mongoose.model('Meetup');

	const meetup = await new Meetup({
		...args, group: id
	});

	const group = await this.findByIdAndUpdate(id, {$push: {meetups: meetup.id}});

	return {
		meetup: await meetup.save(),
		group,
	}
}

export default mongoose.model('Group', GroupSchema);
