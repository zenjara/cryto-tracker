import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getCurrentData from "../apis/coin/getCurrentData";

const Coin = () => {
    const params = useParams();
    console.log(params)
    const coinName = params.coin
    const [coinData, setCoinData] = useState(null)

    useEffect(() => {
        getCurrentData(coinName).then(data => setCoinData(data))
    }, [])

    console.log(coinData)


    return (
        coinData && (
            <>
                <h2>
                    <img src={coinData.image.small} alt={coinName}/>
                    {coinName.toUpperCase()} ({coinData.symbol})
                </h2>
                <h3>About</h3>
                <div style={{display: 'flex', gap: '26px'}}>
                    {coinData.description.en}
                </div>

                <div>{coinName}</div>
            </>
        )
    )
}

export default Coin
