interface Props {
  onClick: (component: string) => void
}

export const Aside = ({ onClick }: Props) => {
  return(
    <aside className="py-5 px-8 w-80 flex flex-col justify-between">
      <div>
        <div className="flex gap-5 mb-6">
          <img src="/logo2.svg" alt="logo"/>
          <img src="/StudyPlanner.svg" alt="titulo"/>
        </div>
        <hr className="border-gray-300 my-4 w-64"/>
        <div className="text-gray-500 flex flex-col gap-5 text-base mt-6">
          <button onClick={() => onClick("Home")}>
            <div
              className="flex gap-2 items-center font-bold bg-white text-dark rounded-md ml-[-12px] px-3 py-2 shadow">
              {/*<i className="fas fa-home w-5"></i>
              <img src={HomeIcon} alt="home icon"/>*/}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-smart-home stroke-dark" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path
                  d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"/>
                <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"/>
              </svg>
              <p>Home</p>
            </div>
          </button>
          <button onClick={() => onClick("Curso")}>
            <div className="flex gap-2 items-center">
              {/*<i className="fas fa-book w-5"></i>*/}
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-2 stroke-gray-500" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/>
                <path d="M19 16h-12a2 2 0 0 0 -2 2"/>
                <path d="M9 8h6"/>
              </svg>
              <p>Mi Curso</p>
            </div>
          </button>
          <button onClick={() => onClick("Asignaturas")}>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book stroke-gray-500" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/>
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/>
                <path d="M3 6l0 13"/>
                <path d="M12 6l0 13"/>
                <path d="M21 6l0 13"/>
              </svg>
              <p>Asignaturas</p>
            </div>
          </button>
          <button onClick={() => onClick("Tareas")}>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-check stroke-gray-500" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"/>
                <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"/>
                <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"/>
                <path d="M11 6l9 0"/>
                <path d="M11 12l9 0"/>
                <path d="M11 18l9 0"/>
              </svg>
              <p>Tareas</p>
            </div>
          </button>
          <button onClick={() => onClick("Calendario")}>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-month stroke-gray-500" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
                <path d="M16 3v4"/>
                <path d="M8 3v4"/>
                <path d="M4 11h16"/>
                <path d="M7 14h.013"/>
                <path d="M10.01 14h.005"/>
                <path d="M13.01 14h.005"/>
                <path d="M16.015 14h.005"/>
                <path d="M13.015 17h.005"/>
                <path d="M7.01 17h.005"/>
                <path d="M10.01 17h.005"/>
              </svg>
              <p>Calendario</p>
            </div>
          </button>
          <button onClick={() => onClick("Notas")}>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-text stroke-gray-500" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                <path d="M9 12h6"/>
                <path d="M9 16h6"/>
              </svg>
              <p>Notas</p>
            </div>
          </button>
          <button onClick={() => onClick("Examenes")}>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-time stroke-gray-500" width="20"
                   height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round"
                   stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                <path d="M12 12.496v1.504l1 1"/>
              </svg>
              <p>Exámenes</p>
            </div>
          </button>
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