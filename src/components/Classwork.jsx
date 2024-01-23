import axios from "axios";
import React, { useState } from "react";

const Classwork = () => {
    let endPoint = "https://api.github.com/users";
    const [data, setData] =useState([]);

    const fetchData = () =>{
        axios.get(endPoint).then((response) => {
            console.log(response.data);
            setData(response.data)
        })
    }
    return (
        <div>
            <h1>Fetch</h1>
            <button>Catch</button>
            {data.map((item, index) => ( 
                <div key={index}>
                    <div>
                        <img
                        src={item.avatar_url} height={200}
                        alt=""/>
                    </div>
                        <h1>
                            {item.login}
                        </h1>
                    </div>
            ))};
        </div>
    );
}

export default Classwork