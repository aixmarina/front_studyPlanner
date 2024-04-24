import {Form} from "../../../../components/Form.tsx";
import {Button} from "../../../../components/Button.tsx";

export const CourseFormCreate = () => {
  return (
    <Form title="Añade la información de tu curso">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
          Nombre del curso
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          placeholder="Nombre del curso"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="centro">
          Centro de estudios
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="centro"
          type="text"
          placeholder="Centro de estudios"
        />
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="años">
            Años de duración
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow focus:outline-none focus:shadow-outline"
            id="años"
            type="number"
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="evaluacion">
            Evaluación por:
          </label>
          <select id="evaluacion" name="evaluacion"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline">
            <option value="">Escoge una opción</option>
            <option value="semestres">Semestres</option>
            <option value="cuatri">Cuatrimestres</option>
          </select>
        </div>

      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="primer_año">
            Primer año académico
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow focus:outline-none focus:shadow-outline"
            id="primer_año"
            type="number"
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="ultimo_año">
            Último año académico
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow focus:outline-none focus:shadow-outline"
            id="ultimo_año"
            type="number"
          />
        </div>
      </div>

      <div className="mb-6 text-center">
        <Button type="primary" classes="w-full focus:outline-none focus:shadow-outline">Guarda tu curso</Button>
      </div>
    </Form>
  )
}