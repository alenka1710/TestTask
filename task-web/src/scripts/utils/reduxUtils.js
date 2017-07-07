export default function createReducer(initialState, handlers) {
  return function (state = initialState, action) {
    if (action
    && action.type
    && Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
