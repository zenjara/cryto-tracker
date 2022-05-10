const SearchBar = ({searchTerm, setSearchTerm}) => {
    return (
        <div className='search'>
            <input type="text" placeholder='Search for your favorite coin...' value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )
}

export default SearchBar
