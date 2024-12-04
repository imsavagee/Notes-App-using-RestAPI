import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "./component/LoginForm"
import Post from "./component/Post"

function App() {

 


  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/"  element={<LoginForm/>}/> */}
      <Route path="/Notes-App-using-RestAPI/" element={<Post/>}/>
      {/* <Route path={"/home"} element={<Post/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
