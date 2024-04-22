import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import {Outlet} from "react-router-dom";


export const Container = () => {
  const currentDate: Date = new Date();
  const formattedDate:string = format(currentDate, "EEEE, d 'de' MMMM 'de' yyyy", { locale: es }).replace(/^\w/, c => c.toUpperCase());

  return (
    <>
      <section className="flex-grow flex flex-col">
        <div className="bg-pale2 pt-3">
          <p className="font-bold">Hola, Marina</p> {/* this should be dynamic */}
          <p className="text-sm text-gray-600">{formattedDate}</p>
        </div>
        <div className="bg-white my-3 mr-4 rounded-xl flex-grow">
          <Outlet />
        </div>
      </section>
    </>
  )
}