import {Form} from "../../../../components/Form.tsx";
import {Button} from "../../../../components/button/Button.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";
import axios from "../../../../api/axios.ts";
import {useNavigate} from "react-router-dom";

export const SubjectFormCreate = () => {
  const { course } = useCurrentUser()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    year: 1,
    semester: 1,
    color: '#EF5A3C',
    course_id: course?.id
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(course) {
      try {
        console.log(formData)
        await axios.post('v1/subjects', formData)
        navigate('/dashboard/subjects')
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <Form title="Introduce la información de tu asignatura" onSubmit={handleSubmit}>
      <div className="mb-4 md:flex md:justify-between gap-3">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="DAW"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="desc">
            Descripción
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="desc"
            type="text"
            placeholder="Despligue de Aplicaciones Web"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="año_cursa">
            Año en el que se cursa
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow focus:outline-none focus:shadow-outline"
            id="año_cursa"
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="eval_cursa">
            Semestre en el que se cursa:
          </label>
          <select id="eval_cursa" name="semester"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
                  value={formData.semester}
                  onChange={handleChange}
          >
            <option value="">Escoge una opción</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">1 y 2</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="color">Selecciona un color para tu asignatura:</label>
        <input type="color" id="color" name="color" value={formData.color} onChange={handleChange}/>
      </div>
      <div className="mb-6 text-center">
        <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">Guarda tu asignatura</Button>
      </div>
    </Form>
  )
}