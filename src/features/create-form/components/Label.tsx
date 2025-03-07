type LabelType = React.ComponentProps<"label"> & { required?: boolean };

const Label = ({ children, required = false, ...props }: LabelType) => {
  return (
    <label {...props} className="text-xl">
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
