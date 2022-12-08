import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [product, setProduct] = useState(1);
  return (
    <div>
    <div className="App">
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1);
        setCount2(count + 1);
        } 
      }>Add One</button>
      <button onClick={() => setCount(count - 1)}>Subtract One</button>
    </div>
    <div>
    <p>{count2}</p>
    <button onClick={() => setCount2(count2 + 1)}>Add One</button>
    <button onClick={() => setCount2(count2 - 1)}>Subtract One</button>
    </div>
    <div>
    <p>{product}</p>
    <button onClick={() => setProduct(count * count2)}>Multiply Nums</button>
    </div>
    </div>
  );
}

export default App;
