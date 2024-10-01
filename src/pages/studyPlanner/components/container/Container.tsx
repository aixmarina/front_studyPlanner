import {Outlet} from "react-router-dom";
import {getFullDateDescription} from "../../../../helper/dates/dates.ts";
import {useCurrentUser} from "../../../../contexts/CurrentUserContext.tsx";

export const Container = () => {
  const { user } = useCurrentUser()

  return (
    <>
      <section className="flex-grow flex flex-col h-screen overflow-y-scroll">
        <div className="bg-pale2 pt-3">
          <p className="font-bold">Hola, {user?.name}</p>
          <p className="text-sm text-gray-600">{getFullDateDescription}</p>
        </div>
        <div className="bg-white my-3 mr-4 rounded-xl flex-grow h-screen overflow-y-scroll ">
          <Outlet />
        </div>
      </section>
    </>
  )
}