import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [count1, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [product, setProduct] = useState(null); //null - placeholder for a value that is not defined yet
  const [quotient, setQuotient] = useState(null);
  const [name, setName] = useState(""); //set as empty string as first value

  const setCountPlusOne = () => {
    setCount(count1 + 1);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
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
        <form onSubmit={handleChange}>
        <input type="text" placeholder="your name here" value={name} onChange={(e) => setName(e.target.value)}></input>
        <button>Submit Form</button>
        </form>
        <p>{name}</p>
      </div>
    </div>
  );
}
//e for event - on the event object there is a target key which has a value - 
export default App;
