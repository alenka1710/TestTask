import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import validateInput from './../CreateUser/validations';
import './../CreateUser/CreateUser.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.user = props.user.filter(item => item.id === props.params.id)[0];
    this.state = {
      name: this.user.name,
      lastName: this.user.lastName,
      email: this.user.email,
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
      const userUpdateData = {
        name: this.state.name,
        lastName: this.state.lastName,
        email: this.state.email,
      };
      this.props.fetchUserInfo(this.user.id, userUpdateData, '/');
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
        <label htmlFor={input.id} className="field__label">
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
      <div className="update-user-data">
        <form
          className="update-user-data__form-data"
          noValidate
          onSubmit={this.onHandlerSubmit}
        >
          <fieldset className="form-data__fieldset">
            <legend>Update data</legend>
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
            >
              Delete
            </button>
            <button className="form-data__save-button">Save </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

Detail.defaultProps = {
  error: null,
};

Detail.propTypes = {
  fetchUserInfo: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  error: PropTypes.object,
};
