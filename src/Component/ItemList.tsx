import Button from "./Button";
import { Items, ReactSetState } from "./Types/utils";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center bg-gray-50 p-4 rounded-md mb-3 shadow-sm"
    >
      <p className="text-gray-700">{data.title}</p>
      <Button onClick={() => handleDelete(data.id)}>
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
      </Button>
    </div>
  ));
};

export default ItemList;
