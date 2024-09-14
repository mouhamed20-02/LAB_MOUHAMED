import database from '../config/mysql.js'
import Response from '../domain/respons.js'
import logger from '../util/logger.js'
import QUERY from '../query/patientQuery.js'


const HttpStatus = {
    OK: {code: 200, status:'OK'},
    CREATED: {code: 201, status:'CREATED'},
    NO_CONTENT: {code: 204, status:'NO_CONTENT'},
    BAD_REQUEST: {code: 400, status:'BAD_REQUEST'},
    NOT_FOUND: {code: 404, status:'NOT_FOUND'},
    INTERNAL_SERVER_ERROR: {code: 200, status:'INTERNAL_SERVER_ERROR'},
};

export const getPatients = (req, res) => {
    logger.info(`${req.method} ${req.originalurl}, fetching patients`);
    logger.info(req.body)
    database.query(QUERY.SELECT_PATIENT, (err, results) => {
        if(!results){
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'No patients Found'));
        }else{
            res.status(HttpStatus.OK.code)
            .send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Patients Retrieve', {patients: results}));
        }
    })
}

export const createPatient = (req, res) => {
    logger.info(`${req.method} ${req.originalUrl}, Create patient`);
    
    database.query(QUERY.CREATE_PATIENT,Object.values(req.body), (err, results) => {
        if(!results){
            logger.error(err.message)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR.code)
            .send(new Response(HttpStatus.INTERNAL_SERVER_ERROR.code, HttpStatus.INTERNAL_SERVER_ERROR.status, 'Error occured'));
            return
        }else{
            const patient = {id: results.insertedId, ...req.body, created_at: new Date()};
            res.status(HttpStatus.CREATED.code)
            .send(new Response(HttpStatus.CREATED.code, HttpStatus.CREATED.status, 'Patients created', {patients: results}));
        }
    })
}

export default HttpStatus; 