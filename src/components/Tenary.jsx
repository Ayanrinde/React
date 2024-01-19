import React, { useState } from "react"

const Tenary = () => {
    const [name , setName] = useState("Dammy");
    const [userName, setUserName] = useState("");
    const gender = "male";



    let allStudent = [
        {firstName:"Oluwaseun", lastName: "Daniel"},
        {firstName:"Idowu", lastName: "Peter"},
    ];

    const changeName = () => {
        setName(userName)

    }

    const user = (e)=>{
        setUserName(e.target.value)
    };
    return (
        <div>
            <h1 className={ gender === "male"? "bg-blue-500":"bg-pink-500" }>{name}</h1>
            <input onChange={user} type="text" placeholder="enter username" className="rounded-md p-4"/>

            <button onClick={changeName}>Change Name</button>

            {allStudent.map((student, index)=>(
                <h1 key={index}>{student.firstName} {student.lastName}</h1>
            ))}
        </div>
    )
}

export default Tenary