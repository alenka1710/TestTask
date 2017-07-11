import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Pagination.scss';

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

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className={classnames(
            'show-more-items', {
              'hide-more-items': this.props.pagination.stopPagination,
            }
          )}
        >
          More
        </button>
      </div>
    );
  }

}

Pagination.propTypes = {
  showMoreItems: PropTypes.func.isRequired,
  usersLength: PropTypes.number.isRequired,
  pagination: PropTypes.object.isRequired,
};

export default Pagination;
