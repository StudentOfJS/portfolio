import * as React from 'react';

interface FormState {
  name: string;
  email: string;
  password: string;
  nameError: string;
  emailError: string;
  passwordError: string;
  checked: boolean;
  [x: string]: string | boolean;
}

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: '',
  checked: false,
};

const passwordValidation =
  new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,128})');

export default class ContactForm extends React.Component<{}, FormState> {
  state = initialState;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = event => {
    const isCheckbox = event.currentTarget.type === 'checkbox';
    const key: string = event.currentTarget.name;
    const value: string | boolean = isCheckbox
      ? event.currentTarget.checked
      : event.currentTarget.value;
    this.setState({
      [key]: value
    });
  }

  validate = () => {
    const { name, email, password } = this.state;
    let nameError = '';
    let emailError = '';
    let passwordError = '';

    if (!name) {
      nameError = 'name cannot be blank';
    }

    if (!email.includes('@') && !email.includes('.')) {
      emailError = 'invalid email';
    }

    if (passwordValidation.test(password)) {
      if (password.length < 8) {
        passwordError = 'password too short';
      } else {
        passwordError =
          // tslint:disable-next-line:max-line-length
          'password must be 8-128 characters long and must include least 1 of each uppercase and lowercase alphabetical characters and numeric characters';
      }
    }
    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }
    return true;
  }

  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}