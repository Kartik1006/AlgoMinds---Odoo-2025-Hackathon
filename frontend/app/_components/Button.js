function Button({ children, type = "button", onClick = null }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${type === "submit" ? "w-full " : ""} ${
        type === "filter" ? "mb-2 " : ""
      } bg-transparent text-primary text-lg border-primary border-2 rounded-md p-2 hover:bg-primary hover:text-accent-rust font-bold`}
    >
      {children}
    </button>
  );
}

export default Button;
