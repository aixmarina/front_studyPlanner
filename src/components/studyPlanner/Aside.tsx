import {Link} from "react-router-dom";

export const Aside = () => {
  return(
    <aside className="py-5 px-8 w-80">
      <div className="flex gap-5 mb-6">
        <img src="/logo2.svg" alt="logo"/>
        <img src="/StudyPlanner.svg" alt="titulo"/>
      </div>
      <hr className="border-gray-300 my-4 w-52"/>
      <div className="text-gray-500 flex flex-col gap-5 text-lg mt-6">
        <Link to="/home">
          <div className="flex gap-2 items-center font-bold w-52 bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow">
            <i className="fas fa-home w-5"></i>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/home/curso">
          <div className="flex gap-2 items-center">
            <i className="fas fa-book w-5"></i>
            <p>Mi Curso</p>
          </div>
        </Link>
        <Link to="/home/asignaturas">
          <div className="flex gap-2 items-center">
            <i className="fas fa-book-open w-5"></i>
            <p>Asignaturas</p>
          </div>
        </Link>
        <Link to="/home/tareas">
          <div className="flex gap-2 items-center">
            <i className="fas fa-tasks w-5"></i>
            <p>Tareas</p>
          </div>
        </Link>
        <Link to="/home/calendario">
          <div className="flex gap-2 items-center">
            <i className="fas fa-calendar-alt w-5"></i>
            <p>Calendario</p>
          </div>
        </Link>
        <Link to="/home/notas">
          <div className="flex gap-2 items-center">
            <i className="fas fa-clipboard w-5"></i>
            <p>Notas</p>
          </div>
        </Link>
        <Link to="/home/examenes">
          <div className="flex gap-2 items-center">
            <i className="fas fa-file-alt w-5"></i>
            <p>Exámenes</p>
          </div>
        </Link>
      </div>
      <hr className="border-gray-300 my-8 w-52"/>
      <div className="bg-white rounded-xl p-2 flex shadow justify-around items-center">
        <img className="rounded-full" src="https://i.pravatar.cc/40" alt="foto de perfil"/>
        <div className="text-xs">
          <p>Marina Aix</p>
          <p>marinaaix4@gmail.com</p>
        </div>
      </div>
    </aside>
  )
}