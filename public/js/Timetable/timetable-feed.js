const url = "http://localhost:3000/getData";

const fetchData = async (raw) => {
    const response = await fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : raw,
        redirect : 'follow'
    });

    const data = await response.json();
    return data;
}


const getdata = () => {
    const date = new Date();
    const day = dayOfWeek(date.getDay());
    const sem8 = 8;

    const period_number = timeOfDay(date.getHours(),date.getMinutes());
    console.log(period_number);
    const data = {
        period_number,
        day_name : day, 
        semester : sem8
    }
    const raw = JSON.stringify(data);
    fetchData(raw).then(data => console.log(data)).catch(err => console.log(err));
}

const dayOfWeek = (dayIndex) => ["","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex]

const timeOfDay = (time, mins) => {
    if(time < 12 && time >= 11 ){
        return 1;
    }else if(time < 13 && time >= 12){
        return 2;
    }else if(time < 14 && time >= 13){
        if(mins < 15 && mins >= 0){
            return 3;
        }else{
            return 4;
        }
    }else if(time < 15 && time >= 14){
        if(mins < 59 && mins >= 15){
            return 5;
        }else{
            return 4;
        } 
    }else if(time < 16 && time >= 15){
        if(mins <  15){
            return 5;
        }else if(mins <  45 && mins >= 15){
            return 6
        }else{
            return 7;
        }
    }else if(time < 17 && time >= 16){
        if(mins < 45){
            return 7;
        }else{
            return 8;
        }
    }else if(time >= 17){
        return 8;
    }
}

getdata();