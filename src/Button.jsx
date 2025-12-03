function Button({ text = "Click Me", color = "blue" }) {
  return (
    <>
      <button style={{ backgroundColor: color }}>{text}</button>
    </>
  );
}
export default Button;
