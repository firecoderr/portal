import React from "react";

type InputType = React.ComponentProps<"input">;

const Input = React.memo(({ id, required = true, ...props }: InputType) => {
  console.log(id);

  return (
    <div className="w-fit">
      <input
        {...props}
        required={required}
        type="text"
        className="mx-auto mt-2 block border border-black p-3"
      />
    </div>
  );
});

export default Input;
