import axios from 'axios'
//https://api.exchangeratesapi.io/2020-01-03?base=USD
const instance = axios.create({

    baseURL:'https://api.openrates.io/'
});

export default instance;