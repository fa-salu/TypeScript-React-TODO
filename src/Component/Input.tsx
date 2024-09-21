type Input = {
  type: "text" | "color";
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ type, input, setInput }: Input) => {
  return (
    <div>
      <input
        type={type}
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Add a new item"
      />
    </div>
  );
};

export default Input;
