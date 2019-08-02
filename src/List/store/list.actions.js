import { GET_LIST, GET_LIST_SUCCESS, GET_LIST_ERROR } from "./list.constants";

export const getList = query => {
  return {
    type: GET_LIST,
    payload: query
  };
};

export const getListSuccess = result => {
  return {
    type: GET_LIST_SUCCESS,
    payload: result
  };
};

export const getListError = () => {
  return {
    type: GET_LIST_ERROR
  };
};
