const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyCG5EAx6xUUCUek1WXPd_pYgz85ABfwqB4`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject('Something went wrong to Google servers.');
            } else if(body.status === 'ZERO_RESULTS') {
                reject('Go fix your address');
            } else if(body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then( (location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error);
});