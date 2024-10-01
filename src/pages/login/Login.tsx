import {Button} from "../../components/button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Form} from "../../components/Form.tsx";
import {FormEvent, useState} from "react";
import {login} from "../../api/services/services.ts";
import {AxiosError} from "axios";
import {useCurrentUser} from "../../contexts/CurrentUserContext.tsx";

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const { fetchUser } = useCurrentUser()

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await login(email, password)
      await fetchUser()

      navigate('/dashboard/course')
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setErrorMessage(error.response.data.message)
        }
      } else {
        console.error("An unexpected error occurred:", error)
      }
      setPassword('')
    }
  }

  return (
    <main className="bg-pale min-h-screen flex flex-col">
      <h1 className="text-7xl text-primary flex justify-center pt-7 font-bold">StudyPlanner</h1>
        <section>
          <Form
            title="Iniciar sesión"
            onSubmit={handleLogin}
          >
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-6 text-center">
              <Button type="primary" className="w-full focus:outline-none focus:shadow-outline">Inicia Sesión</Button>
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
                to="/register">
                ¿No tienes una cuenta? ¡Regístrate!
              </Link>
              {errorMessage && <div>{errorMessage}</div>}
            </div>
          </Form>
        </section>
    </main>
  )
}