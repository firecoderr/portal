type SelectType = React.ComponentProps<"select"> & { options: string[] };

const Select = ({
  id,
  required = true,
  className = "w-fit",
  onChange,
  value = "",
  options,
  ...props
}: SelectType) => {
  return (
    <select
      className={
        "mt-2 block rounded-md border border-black p-3 focus:border-violet-900 focus:outline-none " +
        className
      }
      required
      onChange={onChange}
      id={id}
      value={value}
      {...props}
    >
      <option disabled value="">
        Интихоб кунед
      </option>
      {options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
