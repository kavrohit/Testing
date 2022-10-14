import { render,screen} from "@testing-library/react";
import Application from "./Application";

describe('Application', () =>{
  test('render inputbox',()=>{
    render(<Application/>)
    const inputElement = screen.getByRole('textbox',{
      name:"Name"
    });
    expect(inputElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox',{
      name:"Bio"
    })
    expect(bioElement).toBeInTheDocument();

    const pageHeading = screen.getByRole('heading',{
      // name:"Job Application Form"
      level:1,
    });
    expect(pageHeading).toBeInTheDocument();
    

    const sectionHeading = screen.getByRole('heading',{
      // name:"Section form"
      level:2,
    });
    expect(sectionHeading).toBeInTheDocument();
     
    const JobLocationElement = screen.getByRole("combobox");
    expect(JobLocationElement).toBeInTheDocument();

    const termsAndConditions = screen.getByRole('checkbox');
    expect(termsAndConditions).toBeInTheDocument();

    const submitConditions = screen.getByRole("button");
    expect(submitConditions).toBeInTheDocument();

    const nameElement1 = screen.getByLabelText('Name',{
      selector:"input"
    });
    expect(nameElement1).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('I agree to terms and conditions');
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('FullName');
    expect(nameElement3).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument()

    const displayElement = screen.getByDisplayValue('J Cole');
    expect(displayElement).toBeInTheDocument();

    const elementByAltText = screen.getByAltText('a person with the laptop');
    expect(elementByAltText).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
  })
})



