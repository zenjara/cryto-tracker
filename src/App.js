import './App.css';
import CryptoInfo from "./components/CryptoInfo";
import { Routes, Route } from "react-router-dom";
import Coin from "./components/Coin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<CryptoInfo />} />
                <Route path="coins/:coin" element={<Coin />} />
            </Routes>
        </div>
    );
}

export default App;
