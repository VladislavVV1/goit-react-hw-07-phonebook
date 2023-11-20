import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    return(
        <label>
            Find contacts by name
        <input
              type="text"
              name="filter"
              value={useSelector(selectFilter)}
              onInput={(event) => {
                dispatch(setFilter(event.target.value))
              }}
            />
      </label>  
      )
}
