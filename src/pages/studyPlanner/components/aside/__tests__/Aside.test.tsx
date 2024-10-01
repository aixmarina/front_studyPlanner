import {render, screen} from "@testing-library/react";
import {Aside} from "../Aside.tsx";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/vitest'

describe('Aside', () => {
  it('should render 5 links', () => {
    render(
      <MemoryRouter>
        <Aside/>
      </MemoryRouter>
    )
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(5)
  })

  it('should have links with correct names', () => {
    render(
      <MemoryRouter>
        <Aside/>
      </MemoryRouter>
    )

    const expectedHrefs = [
      '/dashboard/home',
      '/dashboard/course',
      '/dashboard/subjects',
      '/dashboard/tasks',
      '/dashboard/calendar'
    ]

    const links = screen.getAllByRole('link')
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(expectedHrefs[index])
    })
  })
})

