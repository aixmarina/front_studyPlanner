import {Header} from "../components/Header.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import subjectInfo from "../../../../api/mocks/subject.json"
import {SubjectDetailsInterface, Unit} from "../types/Interfaces.ts";
import {Button} from "../../../../components/button/Button.tsx";
import {UnitsCard} from "./components/UnitsCard.tsx";

export const SubjectDetails = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState<SubjectDetailsInterface | null>(null)

  useEffect(() => {
/*    const parsedData: SubjectDetailsInterface = JSON.parse(subjectInfo) as SubjectDetailsInterface
    setSubject(parsedData)*/
    setSubject(subjectInfo)
  }, [subjectId])

  return (
   <>
     <section className="p-5 flex flex-col flex-grow">
     {subject ? (
       <>
         <div className="">
           <Header title={subject?.name} subtitle={subject?.description}>
             <Button type={"secondary"}>Editar asignatura</Button>
           </Header>
         </div>
         {subject.units.map((unit: Unit, index: number) => (
           <UnitsCard unit={unit} key={index} />
         ))}
       </>
     ) : (
       <>
        <div>
          <p>Esta asignatura aún no se ha creado, no se puede visualizar</p>
        </div>
       </>
     )}
     </section>
   </>
  )
}