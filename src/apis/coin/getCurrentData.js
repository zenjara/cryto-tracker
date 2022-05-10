import {CoinGeckoClient} from "../CoinGeckoClient";

const getCurrentData = async (coinId) => {
    const response = await CoinGeckoClient.get(`/coins/${coinId}?localization=false&&market_data=true&developer_data=true&sparkline=true`)
    return response.data
}

export default getCurrentData
