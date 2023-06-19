import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { useGlobalContext } from "./context";

const SingleItem = ({ id, title, message }) => {
  const { getTodoById, deleteItem } = useGlobalContext();

  return (
    <div className="single-item">
      <div className="col-50">
        <p className="title">{title}</p>
      </div>
      <div className="col-50">
        <p className="message">{message}</p>
      </div>
      <button
        type="button"
        className="icon-btn"
        onClick={() => getTodoById(id)}
      >
        <RxUpdate className="react-icon modify-btn" />
      </button>
      <button type="button" className="icon-btn" onClick={() => deleteItem(id)}>
        <AiFillDelete className="react-icon delete-btn" />
      </button>
    </div>
  );
};

export default SingleItem;
