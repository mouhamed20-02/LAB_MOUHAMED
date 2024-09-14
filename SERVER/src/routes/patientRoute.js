import express from 'express'
import { createPatient, getPatients } from '../controller/patientController.js'


const patientRoutes = express();
patientRoutes.route('/')
.get(getPatients)
.post(createPatient);

export default patientRoutes;