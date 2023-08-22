import Button from "@/components/Button/Button.core"
import { RenderResult, render } from "@testing-library/react"

describe("Button", () => {
  let myComponent: RenderResult

  beforeEach(() => {
    myComponent = render(<Button>Entrar</Button>)
  })

  it("should render Button Component", () => {
    const { container } = myComponent

    expect(container).toBeTruthy()
    expect(container.innerHTML.includes("Entrar")).toBe(true)
  })
})
