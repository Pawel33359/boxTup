function Input({ children, ...props }) {
  return (
    <div className="input__fields">
      {children && props?.id ? (
        <label htmlFor={props?.id}>{children}</label>
      ) : null}
      <input {...props} />
    </div>
  );
}

export default Input;
