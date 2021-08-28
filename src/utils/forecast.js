const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d0060d8e8ecedb97450e85bf810fce27&query='+lat+','+long

    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            with(body.current){
                const data = {temperature, feelslike, precip}
                callback(undefined, data)
            }
        }
    })
}

module.exports = forecast