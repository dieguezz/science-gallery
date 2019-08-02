const initialState = {
  isLoading: false,
  isError: false,
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEM":
      return {
        ...state,
        isLoading: true
      };
    case "GET_ITEM_SUCCESS":
    return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    case "GET_ITEM_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
