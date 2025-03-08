import React from "react";
type LabelType = React.ComponentProps<"label"> & { required?: boolean };

const Label = React.memo(
  ({ children, required = false, ...props }: LabelType) => {
    console.log("label: " + children);

    return (
      <label {...props} className="text-base">
        {children}
        {required && <span className="text-red-500">*</span>}
      </label>
    );
  },
);

export default Label;
