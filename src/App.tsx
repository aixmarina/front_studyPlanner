import {Landing} from "./pages/landing/Landing.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Registro} from "./pages/registro/Registro.tsx";
import {Login} from "./pages/registro/Login.tsx";
import {StudyPlanner} from "./pages/studyPlanner/StudyPlanner.tsx";
import {Home} from "./pages/studyPlanner/dashboard/home/Home.tsx";
import {Tasks} from "./pages/studyPlanner/dashboard/tasks/Tasks.tsx";
import {Course} from "./pages/studyPlanner/dashboard/course/Course.tsx";
import {Subjects} from "./pages/studyPlanner/dashboard/subjects/Subjects.tsx";
import {Calendar} from "./pages/studyPlanner/dashboard/calendar/Calendar.tsx";
import {Notes} from "./pages/studyPlanner/dashboard/notes/Notes.tsx";
import {Exams} from "./pages/studyPlanner/dashboard/exams/Exams.tsx";
import {CourseFormCreate} from "./pages/studyPlanner/dashboard/courseFormCreate/CourseFormCreate.tsx";
import {SubjectFormCreate} from "./pages/studyPlanner/dashboard/subjectFormCreate/SubjectFormCreate.tsx";

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
      { path: 'tareas', element: <Tasks /> },
      {
        path: 'curso',
        element: <Course /> ,
/*        children: [
          {
            path: 'crear_curso',
            element: <CourseFormCreate />
          }
        ]*/
      },
      { path: 'asignaturas', element: <Subjects /> },
      { path: 'asignaturas/:id', element: <Subjects /> },
      { path: 'calendario', element: <Calendar /> },
      { path: 'notas', element: <Notes /> },
      { path: 'examenes', element: <Exams /> },
      { path: 'crear_curso', element: <CourseFormCreate/> },
      { path: 'crear_asignatura', element: <SubjectFormCreate /> },
    ],
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App