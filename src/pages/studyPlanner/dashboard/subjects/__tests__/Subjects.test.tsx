import {describe} from "vitest";
import {render} from "@testing-library/react";
import {Subjects} from "../Subjects.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {screen} from "@testing-library/react";

describe('Subjects', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path={"/dashboard/subjects"} element={<Subjects />}></Route>
        </Routes>
      </BrowserRouter>
    )
    screen.debug()
    screen.getByText('actualmente')
  })
})