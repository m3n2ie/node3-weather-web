const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibTNuMmllc2tob3NhbmEiLCJhIjoiY2twa3RxN3VqM29kczMxbnhwZXZqc2tkeCJ9.K6Dd2ppR4zll-oogTUHtKQ&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }else{
            with(body.features[0]){
                const latitude = center[1]
                const longitude = center[0]
                const place = place_name

                const data = {latitude, longitude, place}

                callback(undefined, data)
            }
        }
    })
}

module.exports = geocode