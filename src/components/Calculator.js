import Keypad from "./Keypad"
import ScreenUnit from "./ScreenUnit"

function Calculator ({numberKeys, operatorKeys, input, setInput}) {
    return (
        <div className="calculator">
            <p>Calculator</p>
            <ScreenUnit input={input} setInput={setInput}/>
            <Keypad
            numberKeys={numberKeys}
            operatorKeys={operatorKeys}
            setInput={setInput}
            />
        </div>
    )
}

export default Calculator