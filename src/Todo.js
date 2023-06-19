import React from "react";
import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

const Todo = () => {
  return (
    <section className="section-center">
      <ToastContainer className="top left" />
      <div className="container">
        <div className="title-container">
          <h2>Todo V2</h2>
        </div>
        <Form />
        <Items />
      </div>
    </section>
  );
};

export default Todo;
