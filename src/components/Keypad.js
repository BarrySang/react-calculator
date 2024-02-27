import Key from "./Key"

function Keypad ({numberKeys, operatorKeys, setInput}) {
    return (
        <div className="keypad">
            {/* <p>Keypad</p> */}
            <div className="number-keys">
                {
                    // display numbers from 0 - 9
                    numberKeys.map(numberKey => (
                        <div key={numberKey} className="key-container" onClick={() => setInput((prevInput) => prevInput+numberKey)}>
                            <Key value={numberKey}/>
                        </div>
                        
                    ))
                }
            </div>
            {/* <div className="clearfix"></div> */}
            <div className="operator-keys">
                {
                    operatorKeys.map((operatorKey, index) => (
                        <div key={index} className="key-container" onClick={() => setInput((prevInput) => prevInput+operatorKey)}>
                            <Key value={operatorKey}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Keypad