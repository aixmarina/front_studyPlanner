import Empty from "../../../../assets/empty.png"
import {Button} from "../../../../components/Button.tsx";
import {Link} from "react-router-dom";

export const Curso = () => {
  return(
    <section className="p-5 flex flex-col flex-grow">
      <div className="flex items-end flex-col">
        <h1 className="font-bold">Mi Curso</h1>
        <p className="text-sm text-gray-600">Toda la información sobre tu curso aquí</p>
      </div>
      <hr className="border-gray-300 my-4"/>
      <div className="flex items-center flex-col flex-grow justify-center mt-4">
        {/*  if the actual user doesnt have any course info :*/}
        <img className="w-96" src={Empty} alt="empty page" />
        <p className=" text-lg text-gray-800 mt-[-40px]">No estás matriculado en ningún curso.</p>
        <p className="text-gray-600 mb-8">La información sobre tu curso aparecerá aquí.</p>
        <Link to="/dashboard/crear_curso">
          <Button type="secondary">Añadir curso</Button>
        </Link>
      </div>
    </section>
  )
}