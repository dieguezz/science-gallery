import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList, getListSuccess, getListError } from "../store/list.actions";
import { getNasaList } from "../../Nasa/services";

export function useList({ page, searchStr }) {
  const dispatch = useDispatch();
  const listState = useSelector(state => state.listReducer);

  useEffect(() => {
    function fetchList() {
      getNasaList({ page, searchStr })
        .then(res => {
          dispatch(getListSuccess(res));
        })
        .catch(() => {
          dispatch(getListError());
        });
    }

    dispatch(getList());
    fetchList();
  }, [searchStr, page, dispatch]);

  return listState;
}
