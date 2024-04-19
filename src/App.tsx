import {Landing} from "./components/landing/Landing.tsx";
import {Route, Routes} from "react-router-dom";
import {Registro} from "./components/registro/Registro.tsx";
import {Login} from "./components/registro/Login.tsx";
import {StudyPlanner} from "./components/studyPlanner/StudyPlanner.tsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/registro" element={ <Registro /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/home" element={ <StudyPlanner />} />
      </Routes>
    </>
  )
}

export default App
