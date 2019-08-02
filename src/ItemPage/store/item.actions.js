import { GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_ERROR } from "./item.constants";

export const getItem = query => {
  return {
    type: GET_ITEM,
    payload: query
  };
};

export const getItemSuccess = result => {
  return {
    type: GET_ITEM_SUCCESS,
    payload: result
  };
};

export const getItemError = () => {
  return {
    type: GET_ITEM_ERROR
  };
};
