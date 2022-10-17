import { screen, render } from "../../test.utils";
import MuiMode from "./MuiMode";

describe('Testing Mui Mode',() => {
    test('renders text correctly',()=>{
      render(<MuiMode/>);
      const headingElement = screen.getByRole('heading');
      expect(headingElement).toHaveTextContent('dark mode');
  })
})