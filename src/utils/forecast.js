const request = require('request')

//Weatherstack api 
const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5f58c3eedb741640f8893bd8ba17d123&query=' + longitude + "," + latitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Unable to find the location!', unefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +
                ' degress out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })


}

module.exports = forecast