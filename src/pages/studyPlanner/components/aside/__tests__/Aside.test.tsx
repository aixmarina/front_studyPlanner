import {render, screen} from "@testing-library/react";
import {Aside} from "../Aside.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '@testing-library/jest-dom/vitest'

describe('Aside', () => {
  it('should render 7 links', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Aside />}></Route>
        </Routes>
      </BrowserRouter>
    )
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(7)

  })
})