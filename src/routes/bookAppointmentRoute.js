import express from 'express';
import bookAppointment from '../controllers/bookAppointmentController.js';

const router = express.Router();

// POST route to handle appointment booking
router.post('/book-appointment', bookAppointment);

export default router;
