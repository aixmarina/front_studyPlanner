import {Landing} from "./pages/landing/Landing.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Registro} from "./pages/registro/Registro.tsx";
import {Login} from "./pages/registro/Login.tsx";
import {StudyPlanner} from "./pages/studyPlanner/StudyPlanner.tsx";
import {Home} from "./pages/studyPlanner/dashboard/Home.tsx";
import {Tareas} from "./pages/studyPlanner/dashboard/Tareas.tsx";
import {Curso} from "./pages/studyPlanner/dashboard/Curso/Curso.tsx";
import {Asignaturas} from "./pages/studyPlanner/dashboard/Asignaturas.tsx";
import {Calendario} from "./pages/studyPlanner/dashboard/Calendario.tsx";
import {Notas} from "./pages/studyPlanner/dashboard/Notas.tsx";
import {Examenes} from "./pages/studyPlanner/dashboard/Examenes.tsx";
import {FormCreate} from "./pages/studyPlanner/dashboard/Curso/FormCreate.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/registro',
    element: <Registro />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <StudyPlanner />,
    children: [
      { path: '', element: <Home /> },
      { path: 'tareas', element: <Tareas /> },
      { path: 'curso', element: <Curso /> },
      { path: 'asignaturas', element: <Asignaturas /> },
      { path: 'calendario', element: <Calendario /> },
      { path: 'notas', element: <Notas /> },
      { path: 'examenes', element: <Examenes /> },
      { path: 'crear_curso', element: <FormCreate/> },
    ],
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App