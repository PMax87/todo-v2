import React from "react";
import SingleItem from "./SingleItem";
import { useGlobalContext } from "./context";

const Items = () => {
  const { data, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="items">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    if (isLoading) {
      return (
        <div className="items">
          <p>There was an error</p>
        </div>
      );
    }
  }

  return (
    <div className="items">
      <div className="items-header">
        <div className="col-50">
          <h4>Title</h4>
        </div>
        <div className="col-50">
          <h4>Message</h4>
        </div>
      </div>
      <hr />
      {data.data.map((todo) => {
        return <SingleItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default Items;
