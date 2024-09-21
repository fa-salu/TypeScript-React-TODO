import { useState } from "react";
import "./App.css";

type Items = {
  title: string;
  id: string;
};

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, { title: input, id: Date.now().toString() }]);
    setInput("");
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add a new item"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            type="submit"
          >
            Add
          </button>
        </form>

        <div className="mt-6">
          {items.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-md mb-3 shadow-sm"
            >
              <p className="text-gray-700">{data.title}</p>
              <button
                onClick={() => handleDelete(data.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
