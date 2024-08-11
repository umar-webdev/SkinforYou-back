import express from 'express';
import cors from 'cors';
import bookAppointmentRoute from './routes/bookAppointmentRoute.js';

const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json({ limit: "16kb" }));

// Use the book appointment route
app.use('/', bookAppointmentRoute);

export { app };
