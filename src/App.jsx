
// import Button from "./components/Button"
// import Helloworld from "./component/Helloworld"
// import Tenary from "./component/Tenary"
import Assignment from "./components/Assignment.jsx"
import Fetch from "./components/fetch"
import Classwork from "./components/Classwork"
import Sportify from "./components/Sportify"
import { Rout, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
      <Rout path="/" element={<Fetch />} />
    </Routes>
      {/* <Sportify/> */}
      {/* <Classwork/> */}
      <Fetch/>
      {/* <Button/> */}
      {/* <Helloworld/> */}
      {/* <Tenary/> */}
      {/* <Assignment/> */}
    </>
  )
}

export default App
