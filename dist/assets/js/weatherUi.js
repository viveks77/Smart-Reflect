const weather = document.querySelector('.weather');

class Weather{
    constructor(){
        this.city = 'Pusad';
        this.forecast = new Forecast('pusad');
    }

    //fetches data from the forecast.js
    getData(){
        this.forecast.updateCity(this.city)
            .then( data => {
                console.log(data);
                this.updateUI(data.cityDets,data.weather);
            })
            .catch(err => console.log(err));    
    }

    //updates ui 
    updateUI(cityDets,weatherDets){
        const localisedName = this.city.toUpperCase();
        const weatherText = weatherDets.WeatherText;
        const weatherIcon = weatherDets.WeatherIcon;
        const temprature = weatherDets.Temperature.Metric.Value;

        const html = `
            <div class = "city-name "> 
                <span>${localisedName}, ${cityDets.Country.ID}</span>
            </div>
            <hr>
            <div class = " d-flex justify-content-end temprature">
            <div>${temprature}&deg C</div>
            </div>
            <div class = "weather-text">
                <span>${weatherText}</span>
            </div>
        `;

        weather.innerHTML = html;
    }

}
