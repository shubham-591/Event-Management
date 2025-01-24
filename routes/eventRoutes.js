import express from 'express';
import * as eventController from '../controllers/event.controller.js';

const router = express.Router();

router.post('/', eventController.createEvent);
router.get('/:id', eventController.getEventById);
router.get('/', eventController.getAllEvents);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

export default router;