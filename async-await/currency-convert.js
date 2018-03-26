// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:

const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        return response.data.rates[to];        
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}`);
    }

};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`http://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);        
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }

};

const convertCurrency = async (from, to, amount) => {
    let countries = await getCountries(to);
    let rate = await getExchangeRate(from, to);

    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`;
};

convertCurrency('QWE', 'USD', 100).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e.message);
});