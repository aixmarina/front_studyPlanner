import {SubjectInterface} from "../../Asignaturas/Interfaces.ts";

interface Props {
  subject: SubjectInterface
}

export const SubjectCard = ({ subject }: Props) => {
  const borderColor:string = `border-[${subject.color}]`

  console.log(borderColor) // returns #EF5A3C
  return (
    <div className={`border-2 rounded-xl min-h-32 max-w-40 flex flex-col p-2 border-primary shadow justify-between gap-2 hover:scale-110 hover:cursor-pointer transition flex-wrap `}>
      <h3 className={`text-sm text-gray-700`}>{subject.description}</h3>
      <h3 className={`text-black font-light text-lg`}>{subject.name}</h3>
    </div>
  )
}