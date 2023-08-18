import Dashboard from "@/templates/Dashboard/Dashboard.core";
import { RenderResult, render } from "@testing-library/react";

describe("Render text element", () => {
  let myComponent: RenderResult;

  beforeEach(() => {
    myComponent = render(<Dashboard />);
  });

  it("should render dashboard text", () => {
    const { container } = myComponent;

    expect(container).toBeTruthy();
    expect(container.innerHTML.includes("DashboardTemplate.core")).toBe(true);
  });
});
