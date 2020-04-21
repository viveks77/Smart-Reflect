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
	VALUES('S.Y. Amdani'), ('S.T. Khandare'), ('S.S. Asole'), ('P.H. Pawar'), ('S.A. Bhura'), ('P.B. Niranjane'), ('P.A. Bhalge'), ('P.B. Pawar'), ('A.S. Dudhe') , ('S.V.Markate'),('OFF'),("Wasif");

INSERT INTO subject(subject_name, teacher_id)
	VALUES('Artificial Intelligence', 4 ) , ('Embedded Systems', 2), ('Software Engineering', 7), ('Network Security', 3), ('PRACTICAL LAB',4)
			,('PRACTICAL LAB', 9),('Computer Resource Management',7),('Database Management System',1),('Operating System',5),('Free Elective',12),('Professional Ethics',8),('Computer Architecture',4),('PRACTICAL LAB',8),('PRACTICAL LAB',7),('PRACTICAL LAB',5),('Analog and Digital Intergrated Circuits',9),('Object Oriented Programming',1),('Data Structure',6),('Assembly Language Programming',2),('Theory Of Computation',5),('Enviornmental Science',10),('PRACTICAL LAB',2),('PRACTICAL LAB',9),('PRACTICAL LAB',1),('PRACTICAL LAB',6);

INSERT INTO subject(subject_name, teacher_id) values('break', 11) , ('OFF' , 11);

INSERT INTO periods(start_time, end_time)
	VALUES('11:00:00', '12:00:00'), ('12:00:00', '13:00:00'), ('13:00:00', '13:15:00'), ('13:15:00', '14:15:00'), ('14:15:00', '15:15:00'), ('15:15:00', '15:45:00'),
		('15:45:00', '16:45:00'),('16:45:00', '15:45:00'),('8:00:00', '9:00:00'),('9:00:00', '10:00:00'),('10:00:00', '10:30:00'),('10:30:00', '11:30:00'),('11:30:00', '12:30:00'),('12:30:00', '13:30:00');
        
INSERT INTO planned_timetable(day_name, period_number, subject_id)
VALUES('Monday',1,27),('Monday',2,1),('Monday',3,26),('Monday',4,4),('Monday',5,2),('Monday',6,26),('Monday',7, 5),('Monday',8,5),('Monday',7,6),('Monday',8,6),
('Tuesday',1,8),('Tuesday',2,1),('Tuesday',3,26),('Tuesday',4,5),('Tuesday',5,5),('Tuesday',4,6),('Tuesday',5,6),('Tuesday',6,26),('Tuesday',7 ,2), ('Tuesday', 8 ,3),
('Wednesday',1,5),('Wednesday',2,5),('Wednesday',1,6),('Wednesday',2,6),('Wednesday',3,26) ,('Wednesday',4,1),('Wednesday',5,4),('Wednesday',6,26),('Wednesday',7,3), ('Wednesday', 8 ,27) ,
('Thursday',1,27), ('Thursday',2,2),('Thursday',3,26),('Thursday',4,4),('Thursday',5,8),('Thursday',6,26),('Thursday',7,27),('Thursday',8,27),
('Friday',1 ,5),('Friday',2 ,5),('Friday',1,6),('Friday',2 ,6),('Friday',3 ,26),('Friday',4 , 3),('Friday',5 , 2),('Friday',6 , 26),('Friday',7,27),('Friday',8 , 27),
('Saturday',9 ,2),('Saturday',10 ,27),('Saturday',11 ,27),('Saturday',12 ,27),('Saturday',13 ,27),('Saturday',14 ,27),

('Monday',1,7),('Monday',2,8),('Monday',3,26),('Monday',4,9),('Monday',5,10),('Monday',6,26),('Monday',7,11),('Monday',8,27),
('Tuesday',1,13),('Tuesday',2,13 ),('Tuesday',1,14),('Tuesday',2,14),('Tuesday',1,15),('Tuesday',2,15),('Tuesay',3,26),('Tuesday',4,8),('Tuesday',5,10),('Tuesday',6,26),('Tuesday',7,9),('Tuesday',8,27),
('Wednesday',1,7),('Wednesday',2,8),('Wednesday',3,26),('Wednesday',4,9),('Wednesday',5,10),('Wednesday',6,26),('Wednesday',7,27),('Wednesday',8,27),
('Thursday',1,12),('Thursday',2,9),('Thursday',3,26),('Thursday',4,8),('Thursday',5,11),('Thursday',6,26),('Thursday',7,27),('Thursday',8,27),
('Friday',1,7),('Friday',2,9),('Friday',3,26),('Friday',4,12),('Friday',5,27),('Friday',6,26),('Friday',7,13),('Friday',7,14 ),('Friday',8,13 ),('Friday',8,14),('Friday',7,15),('Friday',8,15),
('Saturday',1,12),('Saturday',2,7),('Saturday',3,26),('Saturday',4,13),('Saturday',4,14),('Sturday',5,13),('Saturday',5,14),('Saturday',4,15),('Saturday',5,15),('Saturday',6,27),

('Monday',1,22 ),('Monday',2,22),('Monday',1,23),('Monday',2,23),('Monday',3,26),('Monday',4,16),('Monday',5,7),('Monday',6,26),('Monday',7,18),('Monday',8,19),
('Tuesday',1,17),('Tuesday',2,18),('Tuesday',3,26),('Tuesday',4,16),('Tuesday',5,20),('Tuesday',6,26),('Tuesday',7,24),('Tuesday',8,24),('Tuesday',7,25),('Tuesday',8,25),
('Wednesday',1,20),('Wednesday',2,18),('Wednesday',3,26),('Wednesday',4,19),('Wednesday',5,17),('Wednesday',6,26),('Wednesday',7,23),('Wednesday',8,23),('Wednesday',7,24),('Wednesday',8,27),
('Thursday',1,16),('Thursady',2,18),('Thursday',3,26),('Thursday',4,21),('Thursday',5,20),('Thursday',6,26),('Thursday',7,27),('Thursday',8,27),
('Friday',1,19),('Friday',2,17),('Friday',3,26),('Friday',4, 24),('Friday',5,24),('Friday',4,25),('Friday',5,25),('Friday',6,26),('Friday',7,21),('Friday',8,27),
('Saturday',1,19),('Saturday',2,20),('Saturday',3,26),('Saturday',4,16),('Saturday',5,18),('Saturday',6,27);


        
INSERT INTO generated_timetable(semester, schedule_id)
	VALUES(8,1), (8,2), (8,3), (8,4), (8,5), (8,6), (8,7), (8,8) , (8,9), (8,10),
    (8,11), (8,12), (8,13), (8,14), (8,15), (8,16), (8,17), (8,18) , (8,19), (8,20),
    (8,21), (8,22), (8,23), (8,24), (8,25), (8,26), (8,27), (8,28) , (8,29), (8,30),
    (8,31), (8,32), (8,33), (8,34), (8,35), (8,36), (8,37), (8,38) , (8,39), (8,40),
    (8,41), (8,42), (8,43), (8,44), (8,45), (8,46), (8,47), (8,48) , (8,49), (8,50),(8,51), (8,52), (8,53), (8,54),
    (6,55),(6,56),(6,57),(6,58),(6,59),(6,60),(6,61),(6,62),
    (6,63),(6,64),(6,65),(6,66),(6,67),(6,68),(6,69),(6,70),(6,71),(6,72),(6,73),(6,74),
    (6,75),(6,76),(6,77),(6,78),(6,79),(6,80),(6,81),(6,82),
    (6,83),(6,84),(6,85),(6,86),(6,87),(6,88),(6,89),(6,90),
    (6,91),(6,92),(6,93),(6,94),(6,95),(6,96),(6,97),(6,98),(6,99),(6,100),(6,101),(6,102),
    (6,103),(6,104),(6,105),(6,106),(6,107),(6,108),(6,109),(6,110),(6,111),(6,112),
    (4,113),(4,114),(4,115),(4,116),(4,117),(4,118),(4,119),(4,120),(4,121),(4,122),
    (4,123),(4,124),(4,125),(4,126),(4,127),(4,128),(4,129),(4,130),(4,131),(4,132),    
    (4,133),(4,134),(4,135),(4,136),(4,137),(4,138),(4,139),(4,140),(4,141),(4,142),
    (4,143),(4,144),(4,145),(4,146),(4,147),(4,148),(4,149),(4,150),
    (4,151),(4,152),(4,153),(4,154),(4,155),(4,156),(4,157),(4,158),(4,159),(4,160),
    (4,161),(4,163),(4,164),(4,165),(4,166);