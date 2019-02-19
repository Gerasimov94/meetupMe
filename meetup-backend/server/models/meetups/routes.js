import {Router} from 'express';
import {createMeetup, getAllMeetups, removeMeetup, updateMeetup} from './controller';

const router = new Router();

router.post('/meetups/create', createMeetup);
router.post('/meetups/update', updateMeetup);
router.post('/meetups/delete', removeMeetup);
router.get('/meetups', getAllMeetups);

export default router;
