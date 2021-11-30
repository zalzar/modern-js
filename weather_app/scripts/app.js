const cityForm = document.querySelector('form');

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
        .then(data => console.log(data))
        .catch(err => console.log(err));
    });