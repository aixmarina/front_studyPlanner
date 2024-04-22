export const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-5 text-center">
      <h1 className="font-extrabold text-5xl w-3/6 leading-tight text-dark">La solución para tu organización académica</h1>
      <p className=" text-base w-1/2 pb-3 text-gray-600">Gestiona tu tiempo de manera efectiva y alcanza tus metas estudiantiles con nuestra plataforma intuitiva.</p>
      <img className="w-1/2" src="/mac_hero.png" alt="mac"/>
    </section>
  )
}