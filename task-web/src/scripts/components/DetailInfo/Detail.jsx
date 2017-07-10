import React, { Component, PropTypes } from 'react';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.user = props.user.filter(item => item.id === props.params.id)[0];
    console.log('user', this.user);
    this.state = {
      name: this.user.name,
      lastName: this.user.lastName,
      email: this.user.email,
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
    this.deleteUserData = this.deleteUserData.bind(this);
  }

  onHandlerSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    const userUpdateData = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log('newData', userUpdateData);
    this.props.fetchUserInfo(this.user.id, userUpdateData, '/');
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  deleteUserData() {
    this.props.fetchDeleteUserData(this.user.id, '/');
  }

  renderInputs(inputs) {
    return inputs.map(input => (
      <div className="form-data__input-line" key={input.title}>
        <label htmlFor={input.id}>
          {input.title}
        </label>
        <input
          name={input.id}
          type="text"
          placeholder={input.placeholder}
          value={this.state[input.id]}
          onChange={this.handleInputChange}
        />
      </div>
    ), this);
  }

  render() {
    return (
      <div className="update-user-data">
        <form
          className="update-user-data__form-data"
          noValidate
          onSubmit={this.onHandlerSubmit}
        >
          <fieldset>
            <legend>Update data</legend>
            {this.renderInputs(this.inputData)}
            <button
              type="button"
              onClick={this.deleteUserData}
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

Detail.propTypes = {
  fetchUserInfo: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
  fetchDeleteUserData: PropTypes.func.isRequired,
};
