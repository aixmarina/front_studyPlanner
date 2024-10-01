import {Header} from "../components/Header.tsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import subjectInfo from "../../../../api/mocks/subject.json"
import {SubjectDetailsInterface} from "../types/Interfaces.ts";
import {Button} from "../../../../components/button/Button.tsx";
import {UnitsCard} from "./components/UnitsCard.tsx";
import axios from "../../../../api/axios.ts";

export const SubjectDetails = () => {
  const navigate = useNavigate()
  const { subjectId } = useParams()
  const [subject, setSubject] = useState<SubjectDetailsInterface | null>(null)

  useEffect(() => {
    setSubject(subjectInfo)
  }, [subjectId])

  const handleDeleteButton = async () => {
      try {
        if(subject) {
          await axios.delete(`v1/subjects/${subject.id}`)
          navigate('/dashboard/subjects')
        }
      } catch (error){
        console.log(error)
      }
  }

  return (
   <>
     <section className="p-5 flex flex-col flex-grow">
     {subject ? (
       <>
         <div>
           <Header title={subject?.name} subtitle={subject?.description}>
             <div className="flex gap-3">
               <Link to={{ pathname: "/dashboard/subject/editSubject", state: { subject } }}>
                 <Button type="secondary">Editar</Button>
               </Link>
               <Button type="danger" onClickHandler={handleDeleteButton}>Eliminar</Button>
             </div>
           </Header>
         </div>
         <UnitsCard units={subject.units} />
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