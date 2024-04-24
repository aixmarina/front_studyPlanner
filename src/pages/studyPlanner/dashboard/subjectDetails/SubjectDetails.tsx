import {Header} from "../components/Header.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import subjectInfo from "../../../../api/mocks/subject.json"
import {SubjectDetailsInterface} from "../Asignaturas/Interfaces.ts";

export const SubjectDetails = () => {
  const { subjectId } = useParams()
  const [subject, setSubject] = useState<SubjectDetailsInterface | null>(null)

  useEffect(() => {
    setSubject(subjectInfo)
  }, [subjectId])

  return (
   <>
     {subject ? (
       <Header title={subject?.name} subtitle={subject?.description} />

     ) : (
       <>
        <div>
          <p>Esta asignatura aún no se ha creado, no se puede visualizar</p>
        </div>
       </>
     )}


   </>
  )
}