import { useState, useEffect } from 'react';
import './App.css';

function ExpressApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/about")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);
console.log(message)
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default ExpressApi;