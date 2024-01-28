var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#submitBtn')
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

//apik = "63a90ae96d390ec37d6c1252f5a86e1"
apik="10444aaea0aff70a9033f7a5f9d7fae7"

function convertion(val)
{
    return (val-273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            console.log('API response:', data);


            var nameval = data['name']
            var descripVal = data['weather'][0]['description']
            var temperature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span>`
            description.innerHTML =`SKY Conditions: <span>${descripVal}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h<span>`
        })

        .catch(err => alert('You entered Wrong city name'))
})