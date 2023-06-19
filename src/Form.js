import { useGlobalContext } from "./context";

const Form = () => {
  const { handleSubmit, handleChange, todo, isLoading, isUpdating } =
    useGlobalContext();

  return (
    <>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              className="input-title"
              placeholder="Insert Title..."
              name="title"
              value={todo.title}
              onChange={handleChange}
            />
            <input
              type="text"
              className="input-text"
              placeholder="Insert Text..."
              name="message"
              value={todo.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" disabled={isLoading}>
            {!isUpdating ? "Submit" : "Modify"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
