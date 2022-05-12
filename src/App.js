import './App.css';
import CryptoInfo from "./components/CryptoInfo";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<CryptoInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;
