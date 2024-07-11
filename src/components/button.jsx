export const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className="px-2 py-1 bg-indigo-300 rounded-md"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
