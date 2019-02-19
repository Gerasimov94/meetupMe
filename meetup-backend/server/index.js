import express from 'express';
import {PORT} from './config/appConfig';
import initDatabaseConfig from './config/dbConfig';
import initMiddlewares from './middlewares/middlewares';
import {MeetupRouter} from './models';

const app = express();

initDatabaseConfig();
initMiddlewares(app);

app.use('/api', [MeetupRouter]);

/* eslint-disable no-console */
app.listen(PORT, error => {
	if (error) console.error('Something going wrong, m8');
	else console.log(`Server is working on port ${PORT}`)
});