import {AsignaturaInfo} from "./Interfaces.ts";

interface Props {
  asignatura: AsignaturaInfo
}

export const CardAsignatura = ({ asignatura }: Props) => {
  const borderColor:string = `border-[${asignatura.color}]`

  console.log(borderColor) // returns #EF5A3C
  return (
    <div className={`border-2 rounded-xl min-h-32 max-w-40 flex flex-col p-2 ${borderColor} border-primary shadow justify-between gap-2 hover:scale-110 hover:cursor-pointer transition flex-wrap `}>
      <h3 className={`text-sm text-gray-700`}>{asignatura.descripcion}</h3>
      <h3 className={`text-black font-light text-lg`}>{asignatura.nombre}</h3>
    </div>
  )
}