import Meetup from './model';

export const createMeetup = async ({body: {title, description}}, res) => {
	const meetupInstance = new Meetup({title, description});

	try {
		return res.status(201).json({meetup: await meetupInstance.save()})
	} catch (error) {
		return res.status(error.status).json({error: true, message: 'Failed to save new meetup'})
	}
};

export const removeMeetup = async ({body: {_id}}, res) => {
	try {
		await Meetup.deleteOne({_id})

		return res.status(200).json({message: 'Successfully removed'})
	} catch (error) {
		return res.status(error.status).json({error: true, message: 'Failed to remove meetup'})
	}
};

export const updateMeetup = async ({body: {_id}, body}, res) => {
	try {
		return res.status(200).json({meetup: await Meetup.updateOne({_id}, body)})
	} catch (error) {
		return res.status(error.status).json({error: true, message: 'Failed to update meetup'})
	}
};

export const getAllMeetups = async (_, res) => {
	try {
		return res.status(200).json({meetups: await Meetup.find({})})
	} catch (error) {
		return res.status(error.status).json({error: true, message: 'Failed to find meetups'})
	}
};
