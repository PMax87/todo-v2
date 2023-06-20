import React from "react";
import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Items from "./Items";
import Paginator from "./Paginator";

const Todo = () => {
  return (
    <>
      <section className="container px-4 mx-auto bg-zinc-50 mt-4 rounded shadow-md">
        <ToastContainer className="top left" />
        <div className="container">
          <div className="container pt-8">
            <h2 className="text-4xl text-center font-bold underline underline-offset-8">
              Todo v2
            </h2>
          </div>
          <Form />
          <Items />
        </div>
      </section>
      <Paginator />
    </>
  );
};

export default Todo;
