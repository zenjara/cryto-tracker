import {useEffect, useState} from "react";
import data from '../mockData/data.json'
import Header from "./Header";
import Row from "./Row";
import getCoinsData from "../apis/coins/getCoinsData";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import {useCookies} from "react-cookie";
import {ReactComponent as SearchIcon} from "../assets/search.svg";


const CryptoInfo = () => {
    const [coins, setCoins] = useState([])

    const [searchTerm, setSearchTerm] = useState('');
    const [favoritesFilter, setFavoritesFilter] = useState(false)

    const [cookies, setCookie] = useCookies(['favorites']);
    const [favorites, setFavorites] = useState(cookies.favorites || [])
    // const [favorites, setFavorites] = useState([])
    const [error, setError] = useState('')
    const [coinsPerPage, setCoinsPerPage] = useState(10)

    useEffect(() => {
        getCoinsData(coinsPerPage).then(coins => {
            setCoins(coins)
            setError('')
        }).catch(error => setError(error.message))
    }, [coinsPerPage]);

    useEffect(() => {
        setCookie('favorites', favorites)
    }, [favorites])


    const handleFavoriteClick = (coinName) => {
        if (favorites.includes(coinName)) {
            setFavorites(favorites.filter(favorite => favorite !== coinName))
        } else {
            setFavorites([...favorites, coinName])
        }
    }

    let filteredCoins = coins

    if (searchTerm) filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    if (favoritesFilter) {
        filteredCoins = filteredCoins.filter(coin => favorites.includes(coin.name))
    }

    if (error) return <h3>{error}</h3>

    return (
        <div className='container'>
            <h1 className='title'>Cr<span className='red'>y</span>pto Tracker <SearchIcon className='searchIcon'/></h1>

            <Filters favoritesFilter={favoritesFilter} setFavoritesFilter={setFavoritesFilter}
                     coinsPerPage={coinsPerPage}
                     setCoinsPerPage={setCoinsPerPage}/>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Header/>

            <div className='table'>
                {/*{data.map(cryptoCurrency => <Row cryptoCurrency={cryptoCurrency}/>)}*/}
                {/*{coins.map(coin => <Row coin={coin} key={coin.name} onFavoriteClick={handleFavoriteClick}*/}
                {filteredCoins.map(coin => <Row coin={coin} key={coin.name} onFavoriteClick={handleFavoriteClick}
                                                isFavorite={favorites.includes(coin.name)}/>)}
            </div>
        </div>
    )
}

export default CryptoInfo
