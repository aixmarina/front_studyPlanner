import {describe} from "vitest";
import {render} from "@testing-library/react";
import {Subjects} from "../Subjects.tsx";
import {MemoryRouter} from "react-router-dom";
import {screen} from "@testing-library/react";

describe('Subjects', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter><Subjects/></MemoryRouter>
/*      <BrowserRouter>
        <Routes>
          <Route path={"/dashboard/subjects"} element={<Subjects />}></Route>
        </Routes>
      </BrowserRouter>*/
    )
    screen.debug()
    screen.getByText('Cursando actualmente')
  })
})