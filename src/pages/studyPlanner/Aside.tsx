import HomeIcon from "../../components/aside/Icons/HomeIcon.tsx";
import CursoIcon from "../../components/aside/Icons/CursoIcon.tsx";
import AsignaturasIcon from "../../components/aside/Icons/AsignaturasIcon.tsx";
import TareasIcon from "../../components/aside/Icons/TareasIcon.tsx";
import CalendarioIcon from "../../components/aside/Icons/CalendarioIcon.tsx";
import NotasIcon from "../../components/aside/Icons/NotasIcon.tsx";
import ExamenesIcon from "../../components/aside/Icons/ExamenesIcon.tsx";
import {Link} from "react-router-dom";

export const Aside = () => {
  return(
    <aside className="py-5 px-8 w-80 flex flex-col justify-between">
      <div>
        <div className="flex gap-5 mb-6">
          <img src="/logo2.svg" alt="logo"/>
          <img src="/StudyPlanner.svg" alt="titulo"/>
        </div>
        <hr className="border-gray-300 my-4 w-64"/>
        <div className="text-gray-500 flex flex-col gap-5 text-base mt-6">
          <Link to={"/dashboard/home"}>
            <div className="flex gap-2 items-center font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow">
              <HomeIcon />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/dashboard/curso">
            <div className="flex gap-2 items-center">
              <CursoIcon />
              <p>Mi Curso</p>
            </div>
          </Link>
          <Link to="/dashboard/asignaturas">
            <div className="flex gap-2 items-center">
              <AsignaturasIcon />
              <p>Asignaturas</p>
            </div>
          </Link>
          <Link to="/dashboard/tareas">
            <div className="flex gap-2 items-center">
              <TareasIcon />
              <p>Tareas</p>
            </div>
          </Link>
          <Link to="/dashboard/calendario">
            <div className="flex gap-2 items-center">
              <CalendarioIcon />
              <p>Calendario</p>
            </div>
          </Link>
          <Link to="/dashboard/notas">
            <div className="flex gap-2 items-center">
              <NotasIcon />
              <p>Notas</p>
            </div>
          </Link>
          <Link to="/dashboard/examenes">
            <div className="flex gap-2 items-center">
              <ExamenesIcon />
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