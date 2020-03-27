const finalYear = document.querySelector('.final-year');
const thirdYear = document.querySelector('.third-year');
const secondyear = document.querySelector('.second-year');
class Timetable {

    //fetches data from database
    getdata = (sem, pos, year) => {
        
        
        const date = new Date();
        const day = this.dayOfWeek(date.getDay());
        const period_number = this.timeOfDay(date.getHours(), date.getMinutes());
        console.log(period_number);
        
        const data = {
            period_number: 5,
            day_name: "Tuesday",
            semester: sem
        }
        const raw = JSON.stringify(data);

        
        fetchData(raw)
            .then(data => {
                this.controller(data, pos, year);
            })
            .catch(err => console.log(err));
    }

    dayOfWeek = (dayIndex) => ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex]

    timeOfDay = (time, mins) => {
        if (time < 11) {
            return 1;
        } else if (time < 12 && time >= 11) {
            return 1;
        } else if (time < 13 && time >= 12) {
            return 2;
        } else if (time < 14 && time >= 13) {
            if (mins < 15 && mins >= 0) {
                return 3;
            } else {
                return 4;
            }
        } else if (time < 15 && time >= 14) {
            if (mins < 59 && mins >= 15) {
                return 5;
            } else {
                return 4;
            }
        } else if (time < 16 && time >= 15) {
            if (mins < 15) {
                return 5;
            } else if (mins < 45 && mins >= 15) {
                return 6
            } else {
                return 7;
            }
        } else if (time < 17 && time >= 16) {
            if (mins < 45) {
                return 7;
            } else {
                return 8;
            }
        } else if (time >= 17) {
            return 8;
        }
    }

    //updates the ui
    updateUI = (data, pos, year) => {
        const prof = data.teacher_name;
        const subject = data.subject_name;

        const html = `
            <div class = "subject text-right">
                ${year} Year : ${subject}
            </div>
            <div class = "prof text-secondary text-right">
                -${prof}
            </div>
        `;

        pos.innerHTML = html;
    }

    //Intermediate controller
    controller = (data, pos, year) => {
        this.updateUI(data, pos, year);
        //this.updateUI(schedule.scheduleFinal,finalYear);
    }

    //starter function
    updateSchedule = () => {
        this.getdata(8, finalYear, "Final")
        this.getdata(8, secondyear, "Second")
        this.getdata(8, thirdYear, "Third")

    }

    //Fetches the data at every 15secs
    setImmediateInterval = () => {
        this.updateSchedule();
        setInterval(this.updateSchedule, 15000);
    }
}



