import { useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import { useState } from 'react';
import { evaluateDivision, extractNumbersAroundSlash, replaceCharacters } from './lib-functions/lib-functions';

// TODO - limit inputs to the ones in numberKey and operatorKeys
//        also allow input directly from the keyboard
// TODO - the string with the replaced result of the division operation
//        still has the '=' operator
// TODO - loop through the new string until no '/' are still there
//        updated string currently being logged on clicking or entering '='

function App() {
  const [numberKeys, setNumberKeys] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
  ])
  const [operatorKeys, setOperatorKeys] = useState([
    '(', ')', 'C', '/', '+', '*', '-', '='
  ])
  const [input, setInput] = useState('')
  const [result, setResult] = useState()

  // validate input
  useEffect(() => {
    let lastInput = input[input.length - 1]
    // validate input from keyboard
    if (lastInput) {
      console.log(lastInput)
      console.log(isInputValid(lastInput))
      if (!parseInt(lastInput)) {
        console.log('not a number')
      }
      // validate the last input
      if (lastInput !== '0') {
        if (!parseInt(lastInput)) {
          if(!isInputValid(lastInput)) {
            
            console.log('input is not valid')
            // remove the last entered character
            setInput((prevInput) => prevInput.slice(0, -1))
          }  
        }
      }
    }

    // evaluate the expression
    if (lastInput === '=') {
      console.log('evaluation starts here')

      // remove the '=' symbol from the screen
      setInput((prevInput) => prevInput.slice(0, -1))

      /**
       * BODMAS
       */
      /**
       * division
       */
      handleDivision()
      
      
    }
  }, [input])

  // handle division operations
  function handleDivision() {
    // identify characters beside division signs
    const numbersAroundSymbol = extractNumbersAroundSlash(input)
    console.log(numbersAroundSymbol[0].range)
    let result = evaluateDivision(numbersAroundSymbol[0].before, numbersAroundSymbol[0].after)
    console.log(replaceCharacters(input, numbersAroundSymbol[0].range.start, numbersAroundSymbol[0].range.end, result))
    // console.log('result', evaluateDivision(numbersAroundSymbol[0].before, numbersAroundSymbol[0].after))
  }

  function isInputValid(input) {
    return operatorKeys.includes(input)
  }

  

  return (
    <div className="App">  
      <Calculator
        numberKeys={numberKeys}
        operatorKeys={operatorKeys}
        setInput={setInput}
        input={input}
      />
    </div>
  );
}

export default App;
