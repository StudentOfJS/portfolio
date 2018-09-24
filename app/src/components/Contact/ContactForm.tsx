import * as React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import styled from '../../theme';

const ErrorMessage = styled.h4`
  color: orange;
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
`;

interface FormState {
  first: string;
  email: string;
  last: string;
  mobile: string;
  text: string;
  error: boolean;
  checked: boolean;
  [x: string]: string | boolean;
}

const initialState = {
  first: '',
  email: '',
  last: '',
  mobile: '',
  text: '',
  touched: false,
  error: false,
  checked: false,
};

// safeLength takes a string and a max length and returns true if the string is less than the max
export const safeLength = (s: string, max: number) => s.slice(0, max).length !== max;
export const minLength = (s: string, min: number) => s.length > min;

export default class ContactForm extends React.Component<{}, FormState> {
  state = initialState;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = event => {
    const key: string = event.currentTarget.name;
    const value: string = event.currentTarget.value;
    this.setState({ [key]: value, touched: true });
  }

  handleTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void = event => {
    this.setState({ text: event.currentTarget.value, touched: true });
  }
  handleCheck = () => this.setState(prevProps => ({ checked: !prevProps.checked }));

  validate = ({ checked, email, first, last, text }: FormState) => {
    const noErrors =
      safeLength(text, 255)
      && safeLength(email, 128)
      && safeLength(first, 128)
      && minLength(first, 2)
      && safeLength(last, 128)
      && minLength(last, 2);
    if (!noErrors || !checked) {
      this.setState({ error: true });
      return false;
    }
    return true;
  }
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = event => {
    event.preventDefault();
    const isValid = this.validate(this.state);
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  }

  render() {
    const { checked, error, touched } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: 680, padding: 5, width: '100%' }}>
        <Form.Group widths="equal">
          <Form.Input
            fluid={true}
            label="First name"
            type="text"
            placeholder="First name"
            name="first"
            onChange={this.handleChange}
            required={true}
          />
          <Form.Input
            fluid={true}
            label="Last name"
            type="text"
            placeholder="Last name"
            name="last"
            onChange={this.handleChange}
            required={true}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid={true}
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            required={true}
          />
          <Form.Input
            fluid={true}
            label="Mobile"
            type="text"
            placeholder="Mobile"
            name="mobile"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label="About"
          placeholder="Let me know  how I can help..."
          required={true}
          onChange={this.handleTextArea}
        />
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" onChange={this.handleCheck} />
        </Form.Field>
        {error && <ErrorMessage>check form and try again...</ErrorMessage>}
        {!checked && touched && <ErrorMessage>confirm conditions</ErrorMessage>}
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}