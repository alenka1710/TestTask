import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(state) {
  const data = state;
  const errors = {};
  if (Validator.isEmpty(data.name)) {
    errors.name = 'This field is required';
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'This field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email) && (!Validator.isEmpty(data.email))) {
    errors.email = 'This field contains incorrect email';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
