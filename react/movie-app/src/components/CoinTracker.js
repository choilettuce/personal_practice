import React,{useState,useEffect} from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect (()=> {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        })
    },[])
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>loading...</strong> : null}
            <select>
                {coins.map((coin) => 
                <option>{coin.name}({coin.symbol}) 
                : ${coin.quotes.USD.price}</option>)}
            </select>
        </div>
    );
}

export default CoinTracker;