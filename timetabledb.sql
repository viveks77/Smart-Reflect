CREATE DATABASE timetable;

use timetable;

CREATE TABLE teachers(
	teacher_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(255)
);

CREATE TABLE subject(
	subject_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(255),
    teacher_id INT,
    FOREIGN KEY(teacher_id) REFERENCES teachers(teacher_id)
);

CREATE TABLE periods(
	period_number INT auto_increment PRIMARY KEY,
	start_time TIME,
    end_time TIME
);



CREATE TABLE planned_timetable(
	schedule_id INT auto_increment PRIMARY KEY,
    day_name VARCHAR(255),
    period_number INT,
    subject_id INT,
    FOREIGN KEY(period_number) REFERENCES periods(period_number),
    FOREIGN KEY(subject_id) REFERENCES subject(subject_id)
);

CREATE TABLE generated_timetable(
	timetable_id INT AUTO_INCREMENT PRIMARY KEY,
    semester INT,
    schedule_id INT,
    FOREIGN KEY(schedule_id) REFERENCES planned_timetable(schedule_id)
);

INSERT INTO teachers(teacher_name)
	VALUES('S.Y. Amdani'), ('S.T. Khandare'), ('S.S. Asole'), ('P.H. Pawar'), ('S.A. Bhura'), ('P.B. Niranjane'), ('P.A. Bhalge'), ('P.B. Pawar'), ('A.S. Dudhe') , ('OFF');

INSERT INTO subject(subject_name, teacher_id)
	VALUES('Artificial Intelligence', 4 ) , ('Embedded Systems', 2), ('Software Engineering', 7), ('Network Security', 3), ('Artificial Intelligence (LAB)',4)
			,('Embedded Systems (LAB)', 9);

INSERT INTO subject(subject_name, teacher_id) values('break', 10) , ('OFF' , 10);

INSERT INTO periods(start_time, end_time)
	VALUES('11:00:00', '12:00:00'), ('12:00:00', '13:00:00'), ('13:00:00', '13:15:00'), ('13:15:00', '14:15:00'), ('14:15:00', '15:15:00'), ('15:15:00', '15:45:00'),
		('15:45:00', '16:45:00'),('16:45:00', '15:45:00'),('8:00:00', '9:00:00'),('9:00:00', '10:00:00'),('10:00:00', '10:30:00'),('10:30:00', '11:30:00'),('11:30:00', '12:30:00'),('12:30:00', '13:30:00');
        
INSERT INTO planned_timetable(day_name, period_number, subject_id)
	VALUES('Monday' , 1 , 8) ,('Monday' , 2 , 1) , ('Monday' , 3 , 7) ,('Monday' , 4 , 4) ,('Monday' , 5 , 2) ,('Monday' , 6 , 7) ,('Monday' , 7 , 5) ,('Monday' , 8 , 5) ,
		('Monday' , 7 , 6) ,('Monday' , 8 , 6),
        ('Tuesday', 1 ,8),('Tuesday', 2 ,1), ('Tuesday', 3 ,7), ('Tuesday', 4 ,5),('Tuesday', 5 ,5),('Tuesday', 4 ,6), ('Tuesday', 5 ,6),('Tuesday', 6 ,7), ('Tuesday', 7 ,2), ('Tuesday', 8 ,3),
        ('Wednesday', 1 ,5) ,('Wednesday', 2 ,5) ,('Wednesday', 1 ,6) ,('Wednesday', 2 ,6) ,('Wednesday', 3 ,7) ,('Wednesday', 4 ,1) ,('Wednesday', 5 ,4) ,('Wednesday', 6 ,7) ,('Wednesday', 7 ,3) ,('Wednesday', 8 ,8) ,
        ('Thursday',1,8), ('Thursday',2,2),('Thursday',3,7),('Thursday',4,4),('Thursday',5,8),('Thursday',6,7),('Thursday',7,8),('Thursday',8,8),
        ('Friday',1 , 5), ('Friday',2 , 5),('Friday',1 , 6),('Friday',2 , 6),('Friday',3 , 7),('Friday',4 , 3),('Friday',5 , 2),('Friday',6 , 7),('Friday',7 , 8),('Friday',8 , 8),
        ('Saturday',9 , 8),('Saturday',10 , 8),('Saturday',11 , 8),('Saturday',12 , 8),('Saturday',13 , 8),('Saturday',14 , 8);
        
INSERT INTO generated_timetable(semester, schedule_id)
	VALUES(8,1), (8,2), (8,3), (8,4), (8,5), (8,6), (8,7), (8,8) , (8,9), (8,10),
    (8,11), (8,12), (8,13), (8,14), (8,15), (8,16), (8,17), (8,18) , (8,19), (8,20),
    (8,21), (8,22), (8,23), (8,24), (8,25), (8,26), (8,27), (8,28) , (8,29), (8,30),
    (8,31), (8,32), (8,33), (8,34), (8,35), (8,36), (8,37), (8,38) , (8,39), (8,40),
    (8,41), (8,42), (8,43), (8,44), (8,45), (8,46), (8,47), (8,48) , (8,49), (8,50),(8,51), (8,52), (8,53), (8,54);