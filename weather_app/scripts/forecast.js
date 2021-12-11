class Forcast{
    constructor(){
        this.key = 'VsYFwlGIN8BHbUO4fT1rARo3PEqQQyJQ';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    };
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
    
        return {
            cityDets,
            weather
        };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return (data[0]);
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}




// https://developer.accuweather.com/user/me/apps
const key = 'VsYFwlGIN8BHbUO4fT1rARo3PEqQQyJQ';
// const CitySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const CurrentConditions = 'http://dataservice.accuweather.com/currentconditions/v1/';

// // get weather information
// const getWeather = async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// }

// // get city information
// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();
//     return (data[0]);
// };

// testing getWeather
// getWeather("328328");

// testing the whole API
// getCity('London').then(data => {
//     return getWeather(data.Key)
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));
