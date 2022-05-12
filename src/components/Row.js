import {ReactComponent as Star} from "../assets/star.svg";
import {ReactComponent as EmptyStar} from "../assets/emptyStar.svg";
import {Link} from "react-router-dom";
import {formatter} from "../utils/displayPrice";

const extractColorClass = (value) => {
    return value > 0 ? 'green' : 'red'
}

const Row = ({coin, isFavorite, onFavoriteClick}) => {
    return (
        <div className='row'>
            <div className='field small-field' onClick={() => onFavoriteClick(coin.name)}>
                <div style={{height: '20px', width: '20px'}}>
                    {isFavorite ? <Star/> : <EmptyStar/>}
                </div>
            </div>
            <div className='field small-field'>{coin.market_cap_rank}</div>
            <div className='field large-field left'>
                {/*<Link to={`/coins/${coin.id}`}>*/}
                    <div className='coinName'>
                        <div className='coinImage'>
                            <img src={coin.image} alt={coin.name}
                                 style={{height: '100%', width: '100%'}}/>
                        </div>
                        <div className='bolded'>
                            {coin.name}
                        </div>
                        <div className='thin'>{coin.symbol.toUpperCase()}</div>
                    </div>
                {/*</Link>*/}
            </div>
            <div className='field large-field bolded'>{formatter.format(coin.current_price)}</div>
            {/*<div className={percentage24hClass}>{coin.price_change_percentage_24h.toFixed(2)}</div>*/}
            <div className={`field large-field bolded ${extractColorClass(coin.price_change_percentage_24h)}`}>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className='field large-field bolded green'>{formatter.format(coin.ath)}</div>
            <div className='field large-field bolded red'>{formatter.format(coin.atl)}</div>
            <div className='field large-field bolded'>{formatter.format(coin.market_cap)}</div>
        </div>
    )
}

export default Row;
