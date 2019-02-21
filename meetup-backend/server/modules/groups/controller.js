import Group from './model'
import {Meetup} from '../meetups';

export const createGroup = async (req, res) => {
	const {name, description} = req.body;

	if (!name) {
		return res.status(400).json({error: true, message: 'Name must be provided!'});
	} else if (typeof name !== 'string') {
		return res.status(400).json({error: true, message: 'Name must be string!'});
	} else if (name.length < 5) {
		return res.status(400).json({error: true, message: 'Name must be longer than 5 chars'});
	}

	if (!description) {
		return res.status(400).json({error: true, message: 'Description must be provided!'});
	} else if (typeof description !== 'string') {
		return res.status(400).json({error: true, message: 'Description must be string!'});
	} else if (description.length < 10) {
		return res.status(400).json({error: true, message: 'Description must be longer than 10 chars'});
	}

	const group = new Group({name, description});

	try {
		return res.status(200).json({error: false, group: await group.save()});
	} catch (error) {
		return res.status(400).json({error: true, message: 'Error of group creation'});
	}
}

export const createGroupMeetup = async (req, res) => {
	const {title, description} = req.body;
	const {groupID} = req.params;

	if (!title) {
		return res.status(400).json({error: true, message: 'Title must be provided!'});
	} else if (typeof title !== 'string') {
		return res.status(400).json({error: true, message: 'Title must be string!'});
	} else if (title.length < 5) {
		return res.status(400).json({error: true, message: 'Title must be longer than 5 chars'});
	}

	if (!description) {
		return res.status(400).json({error: true, message: 'Description must be provided!'});
	} else if (typeof description !== 'string') {
		return res.status(400).json({error: true, message: 'Description must be string!'});
	} else if (description.length < 10) {
		return res.status(400).json({error: true, message: 'Description must be longer than 10 chars'});
	}

	if (!groupID) {
		return res.status(400).json({error: true, message: 'GroupID must be provided!'});
	}

	try {
		const {meetup, group} = await Group.addMeetup(groupID, {title, description});

		return res.status(201).json({error: false, data: {meetup, group}});
	} catch (error) {
		return res.status(400).json({error: true, message: 'Error of group creation'});
	}
}

export const getMeetupsByGroupID = async (req, res) => {
	const {groupID} = req.params;

	if (!groupID) {
		return res.status(400).json({error: true, message: 'You must sent groupID, m8!'})
	}

	const group = await Group.findById;

	if (!group) {
		return res.status(400).json({error: true, message: 'You must sent groupID, m8!'})
	}

	try {
		return res.status(200).json({
			error: false,
			meetups: await Meetup.find({group: groupID}).populate('group', 'name')
		})
	} catch (error) {
		return res.status(400).json({
			error: true,
			message: 'Can\'t populate a group and get a names of meetups'
		})
	}


}
