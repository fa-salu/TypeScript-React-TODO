type Button = {
  children: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Button) => {
  return (
    <div>
      <button
        typeof="submit"
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
