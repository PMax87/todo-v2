import React, { useContext, useState } from "react";
import {
  useCreateItem,
  useFetchToDo,
  useModifyItem,
  useDeleteItem,
} from "./reactQueryCustomHook";
import { toast } from "react-toastify";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    message: "",
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useFetchToDo();
  const { insertItem } = useCreateItem();
  const { modifyItem } = useModifyItem();
  const { deleteItem } = useDeleteItem();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUpdating) {
      if (todo.title && todo.message) {
        insertItem(todo, {
          onSuccess: setTodo({
            title: "",
            message: "",
          }),
        });
      } else {
        toast.error("Please fill the form");
      }
    } else {
      if (todo.title && todo.message) {
        modifyItem(todo, {
          onSuccess: setTodo({
            title: "",
            message: "",
          }),
        });
        setIsUpdating(!isUpdating);
      } else {
        toast.error("Please fill the form");
      }
    }
  };

  const getTodoById = (id) => {
    const todoById = data.data.filter((todo) => todo.id === id)[0];
    setIsUpdating(!isUpdating);
    setTodo({
      id: todoById.id,
      title: todoById.title,
      message: todoById.message,
    });
  };

  return (
    <AppContext.Provider
      value={{
        todo,
        data,
        isLoading,
        error,
        isUpdating,
        page,
        handleChange,
        handleSubmit,
        deleteItem,
        getTodoById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
