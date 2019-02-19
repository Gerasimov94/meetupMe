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
})

GroupSchema.statics.addMeetup = async function (id, args) {
	const Meetup = mongoose.model('Meetup');

	console.log(id, args)

	const group = await this.findById(id);

	console.log(group)

	const meetup = await new Meetup({
		...args, group
	})

	group.meetups.push(meetup);

	return Promise.all([group.save(), meetup.save()]);
}

export default mongoose.model('Group', GroupSchema)
