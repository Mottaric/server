import express from 'express';
import { findRequestsByUser, saveRequest } from '@models/Request/queries';
//import { findRequestsById } from '@models/Update/queries';
import { logger, validate } from '../../middlewares';
import { hasSession } from '../../middlewares/authorization';
import { newRequestSchema } from './schemas';

const router = express.Router();

router.use(logger);

// Probando direccion de find by id
router.get('/find-one', hasSession, async (req, res) => {
	try {
		const query = await findRequestsByUser(req.session_payload.id);
		console.log(query);
		res.status(200).json({ payload: query, message: 'Requests fetched' });
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		res.status(500).json(error.message);
	}
});

export { router };
