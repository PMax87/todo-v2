import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { url } from "./utils";
import { toast } from "react-toastify";

export const useFetchToDo = (page, pageSize) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["ToDo", page, pageSize],
    queryFn: () => url.get(`?page=${page}&pageSize=${pageSize}`),
  });
  return { isLoading, error, data };
};

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteItem } = useMutation({
    mutationFn: (todo) => url.delete(`/${todo}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ToDo"] });
      toast.success("Item Deleted");
    },
  });
  return { deleteItem };
};

export const useCreateItem = () => {
  const queryClient = useQueryClient();
  const { mutate: insertItem, isLoading } = useMutation({
    mutationFn: (todo) =>
      url.post("/", { title: todo.title, message: todo.message }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ToDo"] });
      toast.success("Item Added");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { insertItem, isLoading };
};

export const useModifyItem = () => {
  const queryClient = useQueryClient();
  const { mutate: modifyItem, isLoading } = useMutation({
    mutationFn: (todo) =>
      url.put(`${todo.id}`, { title: todo.title, message: todo.message }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ToDo"] });
      toast.success("Item Updated");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { modifyItem, isLoading };
};
