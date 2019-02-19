import {Router} from 'express';
import {createGroup, createGroupMeetup} from './controller';

const router = new Router();

router.post('/groups/create', createGroup);
router.post('/groups/:groupID/meetup/create', createGroupMeetup);

export default router;
