import React from "react";

type InputType = React.ComponentProps<"input">;

const Input = React.memo(
  ({
    id,
    required = true,
    type = "text",
    className = "w-fit",
    placeholder = "",
    ...props
  }: InputType) => {
    console.log(id);

    return (
      <div className={className}>
        <input
          {...props}
          required={required}
          type={type}
          placeholder={placeholder}
          className={
            "mt-2 block rounded-md border border-black p-3 focus:border-violet-900 focus:outline-none " +
            className
          }
        />
      </div>
    );
  },
);

export default Input;
