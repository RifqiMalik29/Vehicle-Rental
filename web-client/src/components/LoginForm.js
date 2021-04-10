import React from "react";

function LoginForm({
  name,
  placeholder,
  type,
  handleChange,
  className,
  refType,
  value,
}) {
  return (
    <div>
      <div className="loginFormBg">
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          className={className}
          ref={refType}
          value={value}
        />
      </div>
    </div>
  );
}

export default LoginForm;
