select subject_name, teacher_name from  generated_timetable 
JOIN planned_timetable 
	on generated_timetable.schedule_id = planned_timetable.schedule_id 
JOIN subject 
	on planned_timetable.subject_id = subject.subject_id 
join teachers 
	on subject.teacher_id = teachers.teacher_id 
where semester = 6 AND period_number = 1 AND day_name = 'Tuesday';