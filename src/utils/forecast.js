const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/7880fdb25d690cb55b6a9f70d2293474/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const { temperature, precipProbability } = body.currently
            const summary = body.daily.data[0].summary
            const resultString = summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.'
            callback(undefined, resultString)
        }
    })
}


module.exports = forecast