import { useState } from "react";
import "./App.css";
import Input from "./Component/Input";
import Button from "./Component/Button";
import { type Items } from "./Component/Types/utils";
import ItemList from "./Component/ItemList";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, { title: input, id: Date.now().toString() }]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          // type have two
          <Input type="text" input={input} setInput={setInput} />
          <Button>Add</Button>
        </form>

        <div className="mt-6">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
