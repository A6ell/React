import { useEffect, useState } from "react";
import './Ajax.css';

function AjaxApi() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        document.title = "Rest API Test";
    })
    useEffect(() => {
        fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true)
                setItems(result)
            })
    },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    if (error) {
        return (<div>Error:(err.message)</div>)
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <table className="border table table-striped table-hover">
                    <thead>
                        <tr>
                        <th className="border">Name</th>
                        <th className="border">City</th>
                        </tr>
                        </thead>
                            {
                                items.map(item => (
                                    <tr className="border" key={item.id}>
                                        <td className="border">{item.name}</td>
                                        <td className="border">{item.city}</td>
                                        </tr>
                                ))}
                                    
                                        </table>
                                        </div>
                            )}
    console.log(items)
}
export default AjaxApi;


