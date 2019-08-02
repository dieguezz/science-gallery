const itemInitialState = {
  title: "",
  description: ""
};

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  totalPages: 0,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        ...initialState,
        isLoading: true,
      };
    case "GET_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        items: [...action.payload.items],
        totalPages: action.payload.totalPages
      };
    case "GET_LIST_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
