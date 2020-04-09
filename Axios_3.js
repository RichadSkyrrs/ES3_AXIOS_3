import axios from 'axios';

class Api {
    static async getWeather(city) {
        const weatherNow = new Weather((await axios.data.results);
    return weatherNow

    }
}

class Weather{
    constructor ({city, temp, date}){
      this.city = city,
      this.temperature = temp,
      this.date = date,

    }
  }

  Api.getWeather("Pelotas,RS").then(v => {console.log(v)})