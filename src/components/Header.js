import {memo} from "react";

const Header = () => {
    return (
        <div className='header'>
            <div className='small-field'></div>
            <div className='small-field'>#</div>
            <div className='large-field bolded left'>Name</div>
            <div className='large-field bolded'>Price</div>
            <div className='large-field bolded'>24h %</div>
            <div className='large-field bolded'>All Time High</div>
            <div className='large-field bolded'>All Time Low</div>
            <div className='large-field bolded'>Market Cap</div>
        </div>
    )
}

// export default Header
export default memo(Header)
