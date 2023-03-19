function Button({ onClick, children }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
