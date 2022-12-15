import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [count1, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [product, setProduct] = useState(null); //null - placeholder for a value that is not defined yet
  const [quotient, setQuotient] = useState(null);
  const [name, setName] = useState(""); //set as empty string as first value
  const [formSubmitted, setFormSubmitted] = useState(false);

  const setCountPlusOne = () => {
    setCount(count1 + 1);
  }

  const submitForm = (event) => {
    event.preventDefault(); //prevents the page from refreshing on that button click
    setFormSubmitted(!formSubmitted); //when we call submitForm it will change the state of form Submitted. The bang sets it to the opposite of what it is. 
  }

  return (
    <div className="App">
      <div>
        <p>{count1}</p>
        <button onClick={() => setCountPlusOne()}>Add One</button>
        <button onClick={() => setCount(count1 - 1)}>Subtract One</button>
      </div>
      <div>
        <p>{count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>Add One</button>
        <button onClick={() => setCount2(count2 - 1)}>Subtract One</button>
      </div>
      <div>
        <p>{product}</p>
        <button onClick={() => setProduct(count1 * count2)}>Multiply Nums</button>
      </div>
      <div>
        <p>{quotient}</p>
        <button onClick={() => setQuotient(count1 / count2)}>Divide Nums</button>
      </div>
      <div>
        <p>Submit your name below.</p>
        <form onSubmit={event => submitForm(event)}>
        <input type="text" placeholder="your name here" value={name} onChange={(e) => setName(e.target.value)}></input> 
        <button type="submit">Submit Form</button>
        </form>
        <p>{formSubmitted && name}</p>
      </div>
    </div>
  );
}
//e for event - on the event object there is a target key which has a value - 
//48 events are happening everywhere  - the form contains the input and the button
//49 input is textbox. 
// on line 49 set value to name
export default App;
