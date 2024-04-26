import {SubjectInterface} from "../../../types/Interfaces.ts";
import {Link} from "react-router-dom";

interface Props {
  subject: SubjectInterface
}

export const SubjectCard = ({ subject }: Props) => {
  const borderColor:string = `${subject.color}`

  return (
    <Link to={`/dashboard/subjects/${subject.id}`}>
      <div className={`border-2 rounded-xl min-h-32 max-w-40 flex flex-col p-3 shadow justify-between gap-2 hover:scale-110 hover:cursor-pointer transition flex-wrap `}
           style={{ borderColor: borderColor }}
      >
        <h3 className={`text-sm text-gray-700`}>{subject.description}</h3>
        <h3 className={`text-black font-light text-lg`}>{subject.name}</h3>
      </div>
    </Link>
  )
}