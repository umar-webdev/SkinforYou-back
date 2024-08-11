import { Feedback } from '../models/feedback.model.js';

const bookAppointment = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, date, concern } = req.body; // Make sure this matches your model

    if (!fullName || !email || !mobileNumber || !date || !concern) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAppointment = new Feedback({
      fullName,
      email,
      mobileNumber, // Ensure this matches the field in the model
      date,
      concern,
    });

    const savedAppointment = await newAppointment.save();

    return res.status(201).json({
      message: 'Appointment booked successfully!',
      appointment: savedAppointment,
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    return res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

export default bookAppointment;
