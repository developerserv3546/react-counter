import React, {useState} from 'react';

function App() {

    const [counter, setCounter] = useState(0);
    const onCounterChanged = (value) => setCounter(counter + value);
    const getRandomNum = (range) => Math.floor(Math.random() * range + 1);

    return (
        <div>
            <p>{counter}</p>
            <div>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onCounterChanged(-10)}>-10</button>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onCounterChanged(10)}>+10</button>
            </div>
            <div>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onCounterChanged(-100)}>-100</button>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onCounterChanged(100)}>+100</button>
            </div>
            <div>
                <button className="btn btn-outline-primary btn-sm"
                        onClick={() => onCounterChanged(-getRandomNum(10))}>-RANDOM
                </button>
                <button className="btn btn-outline-primary btn-sm"
                        onClick={() => onCounterChanged(getRandomNum(10))}>+RANDOM
                </button>
            </div>
        </div>
    );
}

export default App;
