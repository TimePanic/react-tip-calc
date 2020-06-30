import React, { useState } from 'react';
import './App.scss';

const App = () => {

  const [calculated, setCalculated] = useState(false);
  const [price, setPrice] = useState();
  const [tip, setTip] = useState();

  const calculate = (e) => {
    e.preventDefault();
    const cost = e.target.totalCost.value;
    const people = e.target.amountOfPeople.value;
    const percentage = e.target.amountOfTip.value;

    const total = ((cost / 100) * percentage).toFixed(2);
    const tip = (total / people).toFixed(2);
    
    setTip(tip);
    setPrice(total);
    setCalculated(true);
  }

  const reset = () => {
    setCalculated(false);
  }
  
    return (
      <div className="App">
        <h1 id="header">Tip Calculator</h1>
        <div className="tipForm">
          <form onSubmit={calculate} id="form">
            <h4 className="title">Total price:</h4>
            <label id="costLabel">
              £
              <input type="number" name="totalCost" id="totalCost" min="1" step=".01" required/>
            </label>
            <h4 className="title">Number of people:</h4>
            <label id="peopleLabel">
              <input type="number" name="amountOfPeople" id="amountOfPeople" min="1" required/>
              people
            </label>
            <h4 className="title">% of tip</h4>
            <select name="amountOfTip" id="amountOfTip" required>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="25">25%</option>
              <option value="30">30%</option>
            </select>
            <button type="submit" id="submitBtn">Calculate</button>
          </form>

          <div className="results">
            <h2>{ calculated ? `Your tip is: £${price}` : "" }</h2>
            <h3>{ calculated ? `£${tip} per person` : "" }</h3>
            { calculated ? <button onClick={reset} id="resetBtn">Reset</button> : "" }
          </div>
        </div>
      </div>
    );
}

export default App;
