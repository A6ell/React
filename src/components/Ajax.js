// import { useEffect, useState } from "react";
// import './Ajax.css';

// function AjaxApi() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         document.title = "Rest API Test";
//     })
//     useEffect(() => {
//         fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
//             .then(res => res.json())
//             .then((result) => {
//                 setIsLoaded(true)
//                 setItems(result)
//             })
//     },
//         (error) => {
//             setIsLoaded(true);
//             setError(error);
//         })
//     if (error) {
//         return (<div>Error:(err.message)</div>)
//     }
//     else if (!isLoaded) {
//         return <div>Loading...</div>
//     }
//     else {
//         return (
//             <div>
//                 <table className="border table table-striped table-hover">
//                     <thead className="table-dark">
//                         <tr>
//                         <th>Name</th>
//                         <th>City</th>
//                         </tr>
//                         </thead>
//                         <tbody id="table-body">
//                             {
//                                 items.map(item => (
//                                     <tr key={item.id}>
//                                         <td> {item.name}</td>
//                                         <td> {item.city}</td>
//                                         </tr>
//                                 ))}
//                                     </tbody>
//                                         </table>
//                                         </div>
//                             )}
//     console.log(items)
// }
// export default AjaxApi;
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


