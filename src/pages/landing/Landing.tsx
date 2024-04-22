import {Navbar} from "./Navbar.tsx";
import {Hero} from "./Hero.tsx";
import {Features} from "./Features.tsx";
import {Footer} from "./Footer.tsx";

export const Landing = () => {

  return (
    <div className="z-10 absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-[url('/background_landing.png')]">
      <Navbar/>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}