import {Form} from "../../../../components/Form.tsx";
import {Button} from "../../../../components/button/Button.tsx";
import {ChangeEvent, useState} from "react";

export const SubjectFormCreate = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#EF5A3C")

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value)
  }

  return (
    <Form title="Introduce la información de tu asignatura">
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
          />
        </div>
        <div className="md:ml-2 flex-1">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="eval_cursa">
            {/*Semestre should be dynamic, it would be semestre or cuatrimestre */}
            Semestre en el que se cursa:
          </label>
          <select id="eval_cursa" name="eval_cursa"
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline">
            <option value="">Escoge una opción</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="color">Selecciona un color para tu asignatura:</label>
        <input type="color" id="color" name="color" value={selectedColor} onChange={handleColorChange}/>
      </div>
      <div className="mb-6 text-center">
        <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">Guarda tu asignatura</Button>
      </div>
    </Form>
  )
}