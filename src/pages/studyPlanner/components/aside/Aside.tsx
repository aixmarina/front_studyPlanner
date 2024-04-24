import HomeIcon from "./icons/HomeIcon.tsx";
import CourseIcon from "./icons/CourseIcon.tsx";
import SubjectsIcon from "./icons/SubjectsIcon.tsx";
import TasksIcon from "./icons/TasksIcon.tsx";
import CalendarIcon from "./icons/CalendarIcon.tsx";
import NotesIcon from "./icons/NotesIcon.tsx";
import ExamsIcon from "./icons/ExamsIcon.tsx";
import {Link, useLocation} from "react-router-dom";

export const Aside = () => {
  const location = useLocation()

  return(
    <aside className="py-5 px-8 w-80 flex flex-col justify-between">
      <div>
        <div className="flex gap-5 mb-6">
          <img src="/logo2.svg" alt="logo"/>
          <img src="/StudyPlanner.svg" alt="titulo"/>
        </div>
        <hr className="border-gray-300 my-4 w-64"/>
        <div className="text-gray-500 flex flex-col gap-5 text-base mt-6">
          <Link to={"/dashboard"}>
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"}  hover:text-dark hover:font-bold`}>
              <HomeIcon />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/dashboard/curso">
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard/curso" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"} hover:text-dark hover:font-bold`}>
              <CourseIcon />
              <p>Mi Curso</p>
            </div>
          </Link>
          <Link to="/dashboard/asignaturas">
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard/asignaturas" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"} hover:text-dark hover:font-bold`}>
              <SubjectsIcon />
              <p>Asignaturas</p>
            </div>
          </Link>
          <Link to="/dashboard/tareas">
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard/tareas" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"} hover:text-dark hover:font-bold`}>
              <TasksIcon />
              <p>Tareas</p>
            </div>
          </Link>
          <Link to="/dashboard/calendario">
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard/calendario" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"} hover:text-dark hover:font-bold`}>
              <CalendarIcon />
              <p>Calendario</p>
            </div>
          </Link>
          <Link to="/dashboard/notas">
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard/notas" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"} hover:text-dark hover:font-bold`}>
              <NotesIcon />
              <p>Notas</p>
            </div>
          </Link>
          <Link to="/dashboard/examenes">
            <div className={`flex gap-2 items-center ${location.pathname === "/dashboard/examenes" && "font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow"} hover:text-dark hover:font-bold`}>
              <ExamsIcon />
              <p>Exámenes</p>
            </div>
          </Link>
        </div>
        <hr className="border-gray-300 my-8 w-64"/>
      </div>
      <div
        className="bg-white rounded-xl py-2 px-3 flex shadow justify-between items-center">{/* this should be dynamic*/}
        <img className="rounded-full" src="https://i.pravatar.cc/40" alt="foto de perfil"/>
        <div className="text-xs">
          <p>Marina Aix</p>
          <p className="text-gray-600">marinaaix4@gmail.com</p>
        </div>
        <div>
          <i className="fas fa-chevron-down text-gray-600"></i>
        </div>
      </div>
    </aside>
  )
}