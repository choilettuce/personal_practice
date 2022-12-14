import React,{useState} from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? <strong>loading...</strong> : null}
        </div>
    );
}

export default CoinTracker;