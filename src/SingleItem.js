import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "./context";

const SingleItem = ({ id, title, message, createdAt, updatedAt }) => {
  const { getTodoById, deleteItem } = useGlobalContext();

  return (
    <div className="container">
      <div className="grid grid-cols-5 justify-items-center gap-4 py-4">
        <p className="title">{title}</p>
        <p className="message">{message}</p>
        <p className="message">{createdAt}</p>
        <p className="message">{updatedAt}</p>
        <div className="btn-container grid grid-cols-2 gap-3">
          <button
            type="button"
            className="bg-transparent hover:bg-green-300 border border-green-300 duration-150 text-black font-normal py-2 px-4 rounded-full text-sm"
            onClick={() => getTodoById(id)}
          >
            Modify
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={() => deleteItem(id)}
          >
            <AiFillDelete className="text-red-600 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
