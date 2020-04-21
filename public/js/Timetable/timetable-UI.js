const finalYear = document.querySelector('.final-year');
const thirdYear = document.querySelector('.third-year');
const secondyear = document.querySelector('.second-year');
class Timetable {

    //fetches data from database
    getdata = (semester, pos, stats) => {

        let period_number;
        const date = new Date();
        const day_name = this.dayOfWeek(date.getDay());
        if (day_name == "Saturday") {
            period_number = this.timeofDaySat(date.getHours(), date.getMinutes());
        } else {
            period_number = this.timeOfDay(date.getHours(), date.getMinutes());
        }
       

        const data = {
            period_number,
            day_name,
            semester
        }
        const raw = JSON.stringify(data);


        fetchData(raw)
            .then(data => {
                this.controller(data, pos, stats);
            })
            .catch(err => console.log(err));
    }

    dayOfWeek = (dayIndex) => ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex]

    timeOfDay = (hours, mins) => {
        if (hours < 11) {
            return 1;
        } else if (hours < 12 && hours >= 11) {
            return 1;
        } else if (hours < 13 && hours >= 12) {
            return 2;
        } else if (hours < 14 && hours >= 13) {
            if (mins < 15 && mins >= 0) {
                return 3;
            } else {
                return 4;
            }
        } else if (hours < 15 && hours >= 14) {
            if (mins < 59 && mins >= 15) {
                return 5;
            } else {
                return 4;
            }
        } else if (hours < 16 && hours >= 15) {
            if (mins < 15) {
                return 5;
            } else if (mins < 45 && mins >= 15) {
                return 6
            } else {
                return 7;
            }
        } else if (hours < 17 && hours >= 16) {
            if (mins < 45) {
                return 7;
            } else {
                return 8;
            }
        } else if (hours >= 17) {
            return 8;
        }
    }

    timeofDaySat(hours, mins) {
        if (hours >= 8 && hours < 9) {
            return 9;
        } else if (hours >= 9 && hours < 10) {
            return 10;
        } else if (hours >= 10 && hours <= 11) {
            if (mins < 30) {
                return 11;
            } else {
                return 12;
            }
        } else if (hours >= 11 && hours < 12) {
            if (mins < 30) {
                return 12;
            } else {
                return 13;
            }
        } else if (hours >= 12 && hours < 13) {
            if (mins < 30) {
                return 13;
            } else {
                return 14;
            }
        } else if (hours >= 13) {
            return 14;
        }
    }

    //updates the ui
    updateUI = (data, pos, stats) => {

        const year = stats.year;
        const classroom = stats.class;
        const prof = data.teacher_name;
        const subject = data.subject_name;
        let html = ``;
        if (subject.toLowerCase() === "OFF") {
            html = `
                <div class = "subject-wrapper text-left">
                    <span class = "text-secondary text-uppercase">${year} Year</span>
                    <div class ="subject">OFF LECTURE</div>
                </div>
        `;
        } else if (subject.toLowerCase() == "break") {
            html = `
                <div class = "subject-wrapper text-left">
                    <span class = "text-secondary text-uppercase">${year} Year</span>
                    <div class = "classroom text-light"> Class : ${classroom}</div>
                    <div class ="text-weight-bold">NEXT LECTURE AFTER BREAK</div>
                </div>
                `;
        } else {
            html = `
                <div class = "subject-wrapper text-left">
                    <span class = "text-secondary text-uppercase">${year} Year</span>
                    <div class = "classroom text-light"> Class : ${classroom}</div>
                    <div class ="subject">${subject}</div>
                    <div class = "prof  text-left"> ${prof} </div>
                </div>
                `;
        }
        pos.innerHTML = html;
    }

    //Intermediate controller
    controller = (data, pos, stats) => {
        this.updateUI(data, pos, stats);
        //this.updateUI(schedule.scheduleFinal,finalYear);
    }

    //starter function
    updateSchedule = () => {
        this.getdata(8, finalYear, {
            year: "Final",
            class: "5203"
        });
        this.getdata(8, secondyear, {
            year: "Second",
            class: "5201"
        });
        this.getdata(8, thirdYear, {
            year: "Third",
            class: "5204"
        });

    }

    //Fetches the data at every 15secs
    setImmediateInterval = () => {
        this.updateSchedule();
        setInterval(this.updateSchedule, 15000);
    }
}