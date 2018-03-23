const request = require('request');

let geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCG5EAx6xUUCUek1WXPd_pYgz85ABfwqB4`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Something went wrong to Google servers.');
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Go fix your address');
        } else if(body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};

