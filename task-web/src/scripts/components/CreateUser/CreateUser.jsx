import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
import uuidv1 from 'uuid/v1';
import validateInput from './validations';
import './CreateUser.scss';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      errors: {},
      isValid: false,
    };
    this.inputData = [
      {
        id: 'name',
        title: 'First Name',
        placeholder: 'your Name',
      },
      {
        id: 'lastName',
        title: 'Last Name',
        placeholder: 'your Last Name',
      },
      {
        id: 'email',
        title: 'Email',
        placeholder: 'your email',
      },
    ];
    this.renderInputs = this.renderInputs.bind(this);
    this.onHandlerSubmit = this.onHandlerSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocusInput = this.handleFocusInput.bind(this);
  }

  onHandlerSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      const userData = {
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
        id: uuidv1(),
      };
      this.props.createNewUser(userData, '/');
      this.setState({
        errors: {},
      });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    this.setState({ errors });
    return isValid;
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleFocusInput(event) {
    const { name } = event.target;
    if (this.state.errors[name]) {
      this.setState(prevState => (
        {
          ...prevState,
          errors: {
            ...prevState.errors,
            [name]: null,
          },
        }));
    }
  }

  renderInputs(inputs) {
    const { errors } = this.state;
    return inputs.map(input => (
      <div className="form-data__field" key={input.title}>
        <label htmlFor={input.id}>
          {input.title}
        </label>
        <input
          name={input.id}
          type="text"
          className={classnames(
            'field__input',
            {
              field__input_error: errors[input.id],
            }
          )}
          placeholder={input.placeholder}
          value={this.state[input.id]}
          onChange={this.handleInputChange}
          onFocus={this.handleFocusInput}
        />
        <span
          className={classnames(
            'field__span-error',
            {
              'field__span-error_noneItem': !errors[input.id],
            }
          )}
        >
          {errors[input.id]}
        </span>
      </div>
    ), this);
  }

  render() {
    const { error } = this.props;
    return (
      <div className="create-user-data">
        <form
          className="update-user-data__form-data"
          noValidate
          onSubmit={this.onHandlerSubmit}
        >
          <fieldset>
            <legend>Create user</legend>
            {this.renderInputs(this.inputData)}
            {
              error && error.message
                ? (
                  <span className={classnames('form__message')} >
                    {error.message}
                  </span>
                )
                : null
            }
            <button
              type="button"
              onClick={() => { browserHistory.push('/'); }}
            >
              Cancel
            </button>
            <button className="form-data__save-item">Save </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

CreateUser.defaultProps = {
  error: null,
};

CreateUser.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  error: PropTypes.object,
};
