export const TextField = (props) => {
  const {
    place,
    label,
    type,
    id,
    value,
    localData,
    name,
    errors,
    title,
  handleChange
  } = props;

  return (
    <div>
      <div className="flex gap-[2px]">
        <label className="text-[14px]" htmlFor={id}>
          {label}
        </label>
        <p className="text-start text-[15px] text-[#E14942]">*</p>
      </div>
      <input
        id={id}
        value={localData?.[name]||""}
        onChange={handleChange}
        name={name}
        className={
          errors?.[name]
            ? `flex flex-col ${
                name == "img" ? "h-45" : "h-11"
              } w-full rounded-lg p-3 border-[1px] focus:outline-none border-[#E14942] focus:border-[#0CA5E9]`
            : `flex flex-col ${
                name == "img" ? "h-45" : "h-11"
              } w-full rounded-lg p-3 border-[1px] focus:outline-none border-[#CBD5E1] focus:border-[#0CA5E9]`
        }
        type={type}
        placeholder={place}
        title={title}
      />
      {errors?.[name] && (
        <p className="text-[#E14942] text-[12px]">{errors[name]} </p>
      )}
    </div>
  );
};
