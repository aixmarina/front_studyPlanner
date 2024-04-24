import {Button} from "../../components/Button.tsx";
import {Link} from "react-router-dom";
import {Form} from "../../components/Form.tsx";

export const Registro = () => {

  return (
    <main className="bg-pale min-h-screen flex flex-col">
      <h1 className="text-7xl text-primary flex justify-center pt-7 font-bold">StudyPlanner</h1>
      <section>
        <Form title={"formulario de registro"}>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                />
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="apellidos">
                  Apellidos
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="apellidos"
                  type="text"
                  placeholder="Apellidos"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contraseña">
                  Contraseña
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="contraseña"
                  type="password"
                  placeholder="******************"
                />
    {/*
                TODO: gestión de errores
                <p className="text-xs italic text-red-500 border-red-500">Please choose a password.</p>
    */}
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                       htmlFor="c_password">
                  Confirm Contraseña
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">Registra tu cuenta</Button>
            </div>
            <hr className="mb-6 border-t"/>
            <div className="text-center">

              <Link to={"/"}
                className="inline-block text-sm text-gray-700 align-baseline hover:text-primary">
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-gray-700 align-baseline hover:text-primary"
                to={"/login"}>
                ¿Ya tienes una cuenta? ¡Inicia sesión!
              </Link>
            </div>
          </Form>
        </section>
    </main>
  )
}