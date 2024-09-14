import express from 'express'
import ip from 'ip'
import dotenv from 'dotenv'
import cors from 'cors'
import Response from './domain/respons.js'
import logger from '../src/util/logger.js';
import HttpStatus from './controller/patientController.js'
import patientRoutes from './routes/patientRoute.js'

dotenv.config();
const PORT = 3000;
const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());

app.use('/patients', patientRoutes);
app.get('/', (req, res) => res.send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Patient API, v1.0.0- ALL System Go')));
app.all('*', (req, res) => res.status(HttpStatus.NOT_FOUND.code)
    .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Route does not exit')));
console.log(process.env);
app.listen(PORT, ()=>logger.info(`Server Running on: ${ip.address()}:${PORT}`))