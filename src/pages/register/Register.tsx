import {Button} from "../../components/button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Form} from "../../components/Form.tsx";
import {FormEvent, useState} from "react";
import {AxiosError} from "axios";
import axios from "../../api/axios.ts";

export const Register = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const [errors, setErrors] = useState<{ [key:string]: string[] }>({})

  const navigate = useNavigate()

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({})
    try {
      await axios.post('/register', { name, surname, email, password, password_confirmation: passwordConf })
      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          console.log(error.response.data)
          setErrors(error.response.data);
        }
      } else {
        console.error("Error al registrar:", error);
      }
    }
  }

  return (
    <main className="bg-pale min-h-screen flex flex-col">
      <h1 className="text-7xl text-primary flex justify-center pt-7 font-bold">StudyPlanner</h1>
      <section>
        <Form title={"formulario de registro"} onSubmit={handleRegister}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              {errors?.name && <p className="text-xs italic text-red-500">{errors.name}</p>}
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="apellidos">
                  Apellidos
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="apellidos"
                  type="text"
                  placeholder="Apellidos"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
                {errors?.surname && <p className="text-xs italic text-red-500">{errors.surname}</p>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors?.email && <p className="text-xs italic text-red-500">{errors.email}</p>}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors?.password && <p className="text-xs italic text-red-500">{errors.password}</p>}
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700"
                       htmlFor="c_password">
                  Confirm Contraseña
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  placeholder="******************"
                  value={passwordConf}
                  onChange={(e) => setPasswordConf(e.target.value)}
                />
                {errors?.password_confirmation && (
                  <p className="text-xs italic text-red-500">{errors.password_confirmation}</p>
                )}
              </div>
            </div>
            {password !== passwordConf && (
              <p className="text-xs italic text-red-500">Las contraseñas no coinciden.</p>
            )}
            <div className="mb-6 text-center">
              <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">Registra tu cuenta</Button>
            </div>
            <hr className="mb-6 border-t"/>
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