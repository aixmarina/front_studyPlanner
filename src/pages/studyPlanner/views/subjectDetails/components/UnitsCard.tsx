import {Unit} from "../../types/Interfaces.ts";
import {getSpanishFormatDate} from "../../../../../helper/dates/dates.ts";

interface UnitsCardProps {
  units: Unit[]
}

export const UnitsCard = ({ units }: UnitsCardProps) => {
  return (
    <>
      <section>
        <div>
          <h3 className={"text-xl mb-3 font-medium"}>Temario</h3>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-pale2 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripción
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Inicio
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha Fin
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
              </thead>
              <tbody>
              {units.map((unit: Unit, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {unit.name}
                  </th>
                  <td className="px-6 py-4">
                    {unit.description}
                  </td>
                  <td className="px-6 py-4">
                    {getSpanishFormatDate(unit.date_ini)}
                  </td>
                  <td className="px-6 py-4">
                    {getSpanishFormatDate(unit.date_fin)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-primary hover:underline">Edit</a>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}