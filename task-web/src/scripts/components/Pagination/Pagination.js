import React, { Component, PropTypes } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 4,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { usersLength } = this.props;
    const { selectedValue } = this.state;
    this.props.showMoreItems(selectedValue, usersLength);
  }
  // handleSelectChange(event) {
  //   this.setState({
  //     selectedValue: event.target.value,
  //   });
  //   // this.props.changeCountItems(this.selectedValue);
  //   console.log(this.state.selectedValue);
  // }

  render() {
    return (
      <div>
        <button
          className="show-more-items"
          onClick={this.handleClick}
        >More</button>
      </div>
    );
  }

}

Pagination.propTypes = {
  showMoreItems: PropTypes.func.isRequired,
  usersLength: PropTypes.number.isRequired,
};

export default Pagination;
