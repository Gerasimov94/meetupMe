import {Router} from 'express';
import {createGroup, createGroupMeetup, getMeetupsByGroupID} from './controller';

const router = new Router();

router.post('/groups/create', createGroup);
router.post('/groups/:groupID/meetup/create', createGroupMeetup);
router.get('/groups/:groupID/meetups', getMeetupsByGroupID);

export default router;
