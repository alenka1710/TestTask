import React, { Component, PropTypes } from 'react';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.user = props.user.filter(item => item.id === parseInt(props.params.id, 10))[0];
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
  }

  onHandlerSubmit(event) {
    event.preventDefault();
    const userUpdateData = {
      name: this.state.name,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log('newData', userUpdateData);
    this.props.fetchUserInfo(this.user.id, userUpdateData);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
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
    // console.log('props.user', this.props.user);
    // console.log(this.user);
    return (
      <div className="update-user-data">
        <h3>Update data</h3>
        <form
          className="update-user-data__form-data"
          noValidate
          onSubmit={this.onHandlerSubmit}
        >
          {this.renderInputs(this.inputData)}
          <button>Save </button>
          <button type="button">Delete </button>
        </form>
      </div>
    );
  }
}

Detail.propTypes = {
  fetchUserInfo: PropTypes.func.isRequired,
  user: PropTypes.array.isRequired,
};
