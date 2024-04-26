import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import {Button} from "../Button.tsx";

describe('Button', () => {
  it('should render edit button', () => {
    render(
      <Button type="primary">Edit button</Button>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Edit button/i)

  })
})