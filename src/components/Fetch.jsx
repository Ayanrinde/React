import axios from "axios";
import { useState } from "react";
const fetchData = () => {
    let endPoint = "https://jsonplaceholder.typicode.com/user";
    const [data, setData] =useState([]);

    // const fetchData =()=>{
    //     fetch(endPoint)
    //     .then((response)=> {
    //         return response.json();
    //     })
    //     .then((result) =>{
    //         console.log(result);
    //     });
    // };

    const fetchData = () => {
        axios
        .get(endPoint)
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            <h1>Fetch</h1>
            <button className='bg-green-700 rounded-md' onClick={fetchData}>Fetch</button>
            {data.map((item, index) => (
                <div key={index}>
                    {item.name}</div>
                ))};
        </div>
    );
}

export default Fetch