const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data)=>{
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructure properties
    const { cityDets, weather } = data;




    // update weather details
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
    `;

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets,
        weather
    };

    // bellow isthe original code and above is the object short hand 
    // we can above code when the property name and the value is the same 

    // return {
    //     cityDets: cityDets,
    //     weather: weather
    // };
};


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city 
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    });