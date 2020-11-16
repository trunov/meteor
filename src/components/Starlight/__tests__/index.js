import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Starlight from "../Starlight";

it("renders welcome message", () => {
  const { container, getByText } = render(<Starlight />);
  expect(
    getByText("Starlight is coming down warning! warning!").toBeInTheDocument
  );
});

//   (
//     screen.getByText("Starlight is coming down warning! warning!")
//   ).toBeInTheDocument();
// });
