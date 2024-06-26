import {Button} from "../../components/button/Button.tsx";
import {Link} from "react-router-dom";

export const Navbar = () => {

  return (
    <header>
      <nav className="mx-10 my-5 flex justify-between">
        <div className="flex gap-5 ">
          <img src="/logo.svg" alt="logo"/>
          <img src="/StudyPlanner.svg" alt="logo"/>
        </div>
        <div className="flex gap-5">
          <Link to="/register">
            <Button type="primary">Registrarse</Button>
          </Link>
          <Link to="/login">
            <Button type="secondary">Iniciar Sesión</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}