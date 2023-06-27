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
  const [pageSize, setPageSize] = useState(10);
  const [buttonForPage, setButtonForPage] = useState([]);

  const { data, isLoading, error } = useFetchToDo(page, pageSize);
  const { insertItem } = useCreateItem();
  const { modifyItem } = useModifyItem();
  const { deleteItem } = useDeleteItem();

  if (!isLoading) {
    console.log(data.data.length);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title && todo.message) {
      if (todo.title.trim().length > 1 && todo.message.trim().length > 1) {
        if (isUpdating) {
          modifyItem(todo, {
            onSuccess: setTodo({
              title: "",
              message: "",
            }),
          });
          setIsUpdating(!isUpdating);
        } else {
          insertItem(todo, {
            onSuccess: setTodo({
              title: "",
              message: "",
            }),
          });
          setPage(1);
        }
      } else {
        toast.error("Please enter more than 2 characters");
      }
    } else {
      toast.error("Please fill the form");
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

  const updateTodoPerPage = (numberPerPage) => {
    setPageSize(numberPerPage);
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
        updateTodoPerPage,
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
