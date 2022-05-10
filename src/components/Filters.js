import {ReactComponent as Star} from "../assets/star.svg";
import {ReactComponent as EmptyStar} from "../assets/emptyStar.svg";
import Button from "./Button";

const PER_PAGE_OPTIONS = [10, 20, 100]

const Filters = ({setFavoritesFilter, favoritesFilter, coinsPerPage, setCoinsPerPage}) => {
    return (
        <div className='filters'>
            <Button onClick={() => setFavoritesFilter(!favoritesFilter)}>
                {favoritesFilter ? <Star style={{height: '20px', width: '20px'}}/> :
                    <EmptyStar style={{height: '20px', width: '20px'}}/>}
                Favorites
            </Button>

            <div className='perPage'>
                <label htmlFor="rowsNumber">Show rows:</label>

                <select name="rowsNumber" id="rowsNumber" value={coinsPerPage}
                        onChange={(e) => setCoinsPerPage(e.target.value)}>
                    {PER_PAGE_OPTIONS.map(number => <option value={number}>{number}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Filters
