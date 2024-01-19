import React, { useState } from "react"
import style from "./styles/Helloworld.modules.css"

const Helloworld = () => {


    const [name, setName] = useState ("Gaius")

    const changeName = () => {
        setName("Black Panter")
    }

    return (
        <div>
            <h1 className={style.head}>HelloWorld</h1>
            <h1>{name}<h1/>
            <button onclick={changeName}>Click Me</button>

        </div>
    )
}
export default Helloworld