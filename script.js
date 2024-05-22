const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '90c126eed5mshb9862ebed76d157p192eddjsndf147ef17239',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {

			//cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			console.log(",", temp.innerHTML)
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees

			let sunrise_date = new Date(response.sunrise);
			sunrise.innerHTML = sunrise_date.toTimeString();

			let sunset_date = new Date(response.sunset);
			sunset.innerHTML = sunset_date.toTimeString();

			//sunrise.innerHTML = response.sunrise
			//sunset.innerHTML = response.sunset
	
		
		})

		.catch(err => console.error(err));

}

// FOR FETChing popular city

const getkerala = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'kerala', options)
		.then(response => response.json())
		.then(response => {

			//cloud_pct.innerHTML = response.cloud_pct
			Temp_K.innerHTML = response.temp
			Feels_like_K.innerHTML = response.feels_like
			Humidity_K.innerHTML = response.humidity
			Min_temp_K.innerHTML = response.min_temp
			Max_temp_K.innerHTML = response.max_temp
			Wind_speed_K.innerHTML = response.wind_speed
			Wind_degrees_K.innerHTML = response.wind_degrees
			Sunrise_K.innerHTML = response.sunrise
			Sunset_K.innerHTML = response.sunset
		})
		.catch(err => console.error(err));

}
getkerala()

const getboston = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'boston', options)
		.then(response => response.json())
		.then(response => {

			//cloud_pct.innerHTML = response.cloud_pct
			Temp_B.innerHTML = response.temp
			Feels_like_B.innerHTML = response.feels_like
			Humidity_B.innerHTML = response.humidity
			Min_temp_B.innerHTML = response.min_temp
			Max_temp_B.innerHTML = response.max_temp
			Wind_speed_B.innerHTML = response.wind_speed
			Wind_degrees_B.innerHTML = response.wind_degrees
			Sunrise_B.innerHTML = response.sunrise
			Sunset_B.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
getboston()


const getbangalore = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'bangalore', options)
		.then(response => response.json())
		.then(response => {

			//cloud_pct.innerHTML = response.cloud_pct
			Temp_V.innerHTML = response.temp
			Feels_like_V.innerHTML = response.feels_like
			Humidity_V.innerHTML = response.humidity
			Min_temp_V.innerHTML = response.min_temp
			Max_temp_V.innerHTML = response.max_temp
			Wind_speed_V.innerHTML = response.wind_speed
			Wind_degrees_V.innerHTML = response.wind_degrees
			Sunrise_V.innerHTML = response.sunrise
			Sunset_V.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
getbangalore()



const getkolkata = () => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'kolkata', options)
		.then(response => response.json())
		.then(response => {

			//cloud_pct.innerHTML = response.cloud_pct
			Temp_A.innerHTML = response.temp
			Feels_like_A.innerHTML = response.feels_like
			Humidity_A.innerHTML = response.humidity
			Min_temp_A.innerHTML = response.min_temp
			Max_temp_A.innerHTML = response.max_temp
			Wind_speed_A.innerHTML = response.wind_speed
			Wind_degrees_A.innerHTML = response.wind_degrees
			Sunrise_A.innerHTML = response.sunrise
			Sunset_A.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
getkolkata()


submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(city.value)

})

getweather("Chennai")
