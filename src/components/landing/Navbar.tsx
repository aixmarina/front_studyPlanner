import {Button} from "../Button.tsx";

export const Navbar = () => {

  return (
    <header>
      <nav className="mx-10 my-5 flex justify-between">
        <div className="flex gap-5 ">
          <img src="/logo.svg" alt="logo"/>
          <img src="/StudyPlanner.svg" alt="logo"/>
        </div>
        <div className="flex gap-5">
          <Button title="Registrarse" type="primary" />
          <Button title="Iniciar sesión" type="secondary" />
        </div>
      </nav>
    </header>
  )
}