import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import styled from '../../theme';
import { RootState } from '../../store';
import { PortfolioActionTypes, submitForm } from '../../actions/portfolioActions';
import { ContactForm } from '../../proto/portfolio_pb';

const Message = styled.h4`
  color: #666666;
  font-family: ${props => props.theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
`;

const ErrorMessage = styled(Message)`
  color: orange;
`;

const SuccessMessage = styled(Message)`
  color: #56CBFF;
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

interface FormProps {
  form_confirmed: boolean;
  loading: boolean;
  submit: (form: ContactForm) => void;
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

class FormContact extends React.Component<FormProps, FormState> {
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
      const c = new ContactForm();
      c.setEmail(this.state.email);
      c.setFirst(this.state.first);
      c.setLast(this.state.last);
      c.setMobile(this.state.mobile);
      c.setText(this.state.text);
      console.log('submitting');
      this.props.submit(c);
      console.log('submitted');
      this.setState(initialState);
    }
  }

  render() {
    const { checked, error, touched } = this.state;
    const { form_confirmed, loading } = this.props;
    return (
      <Segment inverted={true} style={{ padding: 10, maxWidth: 680, width: '100%' }}>
        <Form
          loading={loading}
          onSubmit={this.handleSubmit}
          inverted={true}
        >
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
          {form_confirmed && <SuccessMessage>successfully submitted</SuccessMessage>}
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  form_confirmed: state.form.form_confirmed,
  loading: state.form.loading,
});
const mapDispatchToProps = (dispatch: Dispatch<PortfolioActionTypes>) => {
  return {
    submit: (form: ContactForm) => {
      dispatch(submitForm(form));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormContact);
