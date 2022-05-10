import axios from "axios";
import {CoinGeckoClient} from "../CoinGeckoClient";

const baseURL = "https://api.coingecko.com/api/v3";
// {{baseUrl}}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1


const getCoinsData = async (perPage='10', order='market_cap_desc', vsCurrency='usd') => {
    // const response = await axios.get(`${baseURL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1`)
    // const response = await CoinGeckoClient.get('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1')
    const response = await CoinGeckoClient.get(`/coins/markets?vs_currency=${vsCurrency}&order=${order}&per_page=${perPage}&page=1`)
    return response.data
}

export default getCoinsData
