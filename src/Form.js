import { useGlobalContext } from "./context";

const Form = () => {
  const { handleSubmit, handleChange, todo, isLoading, isUpdating } =
    useGlobalContext();

  return (
    <>
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
            <input
              type="text"
              className="form-input px-4 py-3 rounded"
              placeholder="Insert Title..."
              name="title"
              value={todo.title}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-input px-4 py-3 rounded"
              placeholder="Insert Text..."
              name="message"
              value={todo.message}
              onChange={handleChange}
            />
          </div>
          <div className="container text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={isLoading}
            >
              {!isUpdating ? "Submit" : "Modify"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
