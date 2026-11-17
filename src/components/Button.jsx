function Button({
  children,
  type = "primary",
  size = "medium",
  classes = "",
  ...props
}) {
  return (
    <button
      data-button-type={type}
      data-button-size={size}
      className={`btn ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
