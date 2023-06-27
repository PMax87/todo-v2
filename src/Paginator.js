import React from "react";
import { useGlobalContext } from "./context";

const Paginator = () => {
  const { updateTodoPerPage, changePage } = useGlobalContext();

  return (
    <div className="container mt-5 mx-auto flex justify-end">
      <div className="container"></div>
      <div className="container flex justify-end items-center">
        <div className="w96">
          <label
            htmlFor="small"
            className="w-20 mb-2 text-m font-medium text-stone-950"
          >
            Todo per page
          </label>
          <select
            id="small"
            className="w-20 ml-4 p-2 mb-6 text-sm text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="todo-per-page"
            onChange={(e) => updateTodoPerPage(e.target.value)}
          >
            <option selected>10</option>
            <option value="20">30</option>
            <option value="30">50</option>
            <option value="50">100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Paginator;
