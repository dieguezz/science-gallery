import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, getItemSuccess, getItemError } from "./store/item.actions";
import { getNasaItem } from "../Nasa/services";

export function useItem(id) {
  const dispatch = useDispatch();
  const itemState = useSelector(state => state.itemReducer);

  useEffect(() => {
    function fetchItem() {
      getNasaItem(id)
        .then(res => {
          dispatch(getItemSuccess(res));
        })
        .catch(() => {
          dispatch(getItemError());
        });
    }

    dispatch(getItem());
    fetchItem();
  }, [dispatch, id]);

  return itemState;
}
