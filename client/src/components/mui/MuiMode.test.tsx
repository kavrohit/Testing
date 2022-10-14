import { screen, render } from "@testing-library/react";
import AppProvider from "../../Providers/app.provider";
import MuiMode from "./MuiMode";

describe('Testing Mui Mode',() => {
    test('renders text correctly',()=>{
      render(<MuiMode/>, {
        wrapper:AppProvider,
      });
      const headingElement = screen.getByRole('heading');
      expect(headingElement).toHaveTextContent('dark mode');
  })
})