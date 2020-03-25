const express = require('express');
const connection = require('../db/mysqldb');


const router = express.Router();

router.get('', (req, res) => {
    res.render('index');
});

router.post('/getData' , (req ,res) => {
    const query = "select subject_name, teacher_name from  generated_timetable JOIN planned_timetable on generated_timetable.schedule_id = planned_timetable.schedule_id JOIN subject on planned_timetable.subject_id = subject.subject_id join teachers on subject.teacher_id = teachers.teacher_id where ";
    const semester = req.body.semester;
    const period_number = req.body.period_number;
    const day_name = req.body.day_name;
    const condn = `semester = ${semester} AND period_number = ${period_number} AND day_name = '${day_name}';`;
    try{
        connection.query(query + condn, function(error, result) {
            if(error){
                throw new Error(error);
            }

            res.status(200).send(result[0]);

        });
    }catch(e){
        res.status(400).send(e);
    }
});


module.exports = router;