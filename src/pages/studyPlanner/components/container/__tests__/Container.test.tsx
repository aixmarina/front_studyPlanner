import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import {Container} from "../Container.tsx";

describe('Container', () => {
  it('should render my name', () => {
    render(
      <Container />
    )
      screen.debug()
      screen.getByText(/marina/i)
  })
})