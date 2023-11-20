import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

export const ListItem = ({name, number, id}) => {
        const dispatch = useDispatch();
return(
          <li><span>{name}</span>: {number} <button onClick={() => dispatch(deleteContact(id))}>Delete</button></li>         
  )}
