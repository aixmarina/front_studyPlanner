export const Aside = () => {
  return(
    <aside className="p-5">
      <div className="flex gap-5">
        <img src="/logo2.svg" alt="logo"/>
        <img src="/StudyPlanner.svg" alt="titulo"/>
      </div>
      <hr className="border-gray-300 my-4 w-52"/>
      <ul>
        <li>Home</li>
        <hr className="border-gray-300 my-4 w-52"/>
        <li>
          <img className="w-7" src="/icon_home.svg" alt="icono casa"/>
          Mi curso
        </li>
        <li>Asignaturas</li>
        <li>Tareas</li>
        <li>Calendario</li>
        <li>Notas</li>
        <li>Exámenes</li>
      </ul>
    </aside>
  )
}