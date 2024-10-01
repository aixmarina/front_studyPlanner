import {Form} from "../../../../components/Form.tsx";
import {Button} from "../../../../components/button/Button.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {CourseInterface} from "../course/Interfaces.ts";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";
import {useNavigate} from "react-router-dom";
import axios from "../../../../api/axios.ts";

export const CourseFormEdit = () => {
  const navigate = useNavigate()
  const { user, course, setCourse } = useCurrentUser()

  const [formData, setFormData] = useState<CourseInterface | null>(course)

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData!,
      [name]: value
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userId = user?.id

    try {
      if(userId && course) {
        await axios.put(`v1/courses/${course.id}`, formData)
        setCourse(formData)
        navigate('/dashboard/course');
      } else {
        console.log("Error obteniendo la información del usuario")
      }

    } catch (error) {
      console.error("Error al registrar el curso:", error);
    }
  }

  return formData ? (
    <Form title="Edita la información de tu curso" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
          Nombre del curso
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          placeholder="Nombre del curso"
          value={formData.name}
          onChange={handleChange}
          name="name"
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
          value={formData.study_center}
          onChange={handleChange}
          name="study_center"
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
            value={formData.duration_years}
            onChange={handleChange}
            name="duration_years"
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="evaluacion">
            Evaluación por:
          </label>
          <select id="evaluacion" name="evaluation_type"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                  value={formData.evaluation_type}  // Asegura que el select esté sincronizado con el estado
                  onChange={handleChange}
          >
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
            value={formData.first_year}
            onChange={handleChange}
            name="first_year"
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
            value={formData.last_year}
            onChange={handleChange}
            name="last_year"
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="primer_año">
            Año actual
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow focus:outline-none focus:shadow-outline"
            id="primer_año"
            type="number"
            value={formData.actual_year}
            onChange={handleChange}
            name="actual_year"
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="ultimo_año">
            Semestre actual
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow focus:outline-none focus:shadow-outline"
            id="ultimo_año"
            type="number"
            value={formData.actual_semester}
            onChange={handleChange}
            name="actual_semester"
          />
        </div>
      </div>
      <div className="mb-6 text-center">
        <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">Guarda tu curso</Button>
      </div>
    </Form>
  ) : null
}