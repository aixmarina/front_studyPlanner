export const Footer = () => {
  return (
    <footer className="bg-pale p-10">
      <div className="mx-auto px-4 flex justify-between items-start">
        <div className="flex gap-5 self-center mb-3">
          <img className="" src="/logo.svg" alt="logo"/>
          <img className="" src="/StudyPlanner.svg" alt="logo"/>
        </div>
        <div className="mb-6">
          <h5 className="text-lg font-bold mb-4 text-dark">Contacto</h5>
          <p>Teléfono: <a className="text-primary hover:underline" href="tel:+34605298312">+34 605 298 312</a></p>
          <p>Email: <a className="text-primary hover:underline" href="mailto:marina.aix.gomez@gmail.com">marina.aix.gomez@gmail.com</a></p>
        </div>
        <div className="mb-6">
          <h5 className="text-lg font-bold mb-4 text-dark">Cuenta</h5>
          <a href="#" className="text-primary hover:underline">Registrarse</a>
          <span className="mx-2">·</span>
          <a href="#" className="text-primary hover:underline">Iniciar Sesión</a>
        </div>
      </div>
      <hr className="border-dark my-4"/>
      <div className="text-center mt-2">
        <p className="text-sm">&copy; 2024 StudyPlanner. Todos los derechos reservados.</p>
        <p className="text-xs">Iconos hechos por <a href="https://www.flaticon.com/authors/freepik" className="text-primary hover:underline">
          Freepik</a> desde <a href="https://www.flaticon.com/" className="text-primary hover:underline">www.flaticon.com</a></p>
      </div>
    </footer>

  )
}