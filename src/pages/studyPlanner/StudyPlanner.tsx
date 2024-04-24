import {Aside} from "./components/aside/Aside.tsx";
import {Container} from "./components/container/Container.tsx";

export const StudyPlanner = () => {
  return (
    <>
      <main className="min-h-screen bg-pale2 flex">
        <Aside />
        <Container />
      </main>

    </>
  )
}