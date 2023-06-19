import React from "react";
import SingleItem from "./SingleItem";
import { useGlobalContext } from "./context";

const Items = () => {
  const { data, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="container text-center mt-4 p-4">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    if (isLoading) {
      return (
        <div className="container text-center mt-4 p-4">
          <p className="text-xl">There was an error</p>
        </div>
      );
    }
  }

  return (
    <div className="container mt-6">
      <div className="grid grid-cols-5 gap-4 justify-items-center">
        <h4 className="font-semibold">Title</h4>
        <h4 className="font-semibold">Message</h4>
        <h4 className="font-semibold">Created At</h4>
        <h4 className="font-semibold">Updated At</h4>
        <span className="btn-spacer font-semibold">Actions</span>
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400" />
      {data.data.map((todo) => {
        return <SingleItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default Items;
