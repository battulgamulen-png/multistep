export const TextField = (props) => {
  const {
    place,
    label,
    type,
    id,
    localData,
    name,
    errors,
    title,
    handleChange,
    previewUrl,
  } = props;
  const isFileInput = type === "file";

  return (
    <div>
      <div className="flex gap-[2px]">
        <label className="text-[14px]" htmlFor={id}>
          {label}
        </label>
        <p className="text-start text-[15px] text-[#E14942]">*</p>
      </div>
      {isFileInput ? (
        <div
          className={`relative h-45 w-full overflow-hidden rounded-lg border-[1px] ${
            errors?.[name] ? "border-[#E14942]" : "border-[#CBD5E1]"
          }`}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Selected profile"
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="absolute inset-0 flex items-center justify-center p-3 text-sm text-[#64748B]">
              {place || "Choose an image"}
            </p>
          )}
          <input
            id={id}
            onChange={handleChange}
            name={name}
            type={type}
            title={title}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
      ) : (
        <input
          id={id}
          value={localData?.[name] || ""}
          onChange={handleChange}
          name={name}
          className={`flex h-11 w-full flex-col rounded-lg border-[1px] p-3 focus:outline-none ${
            errors?.[name]
              ? "border-[#E14942] focus:border-[#0CA5E9]"
              : "border-[#CBD5E1] focus:border-[#0CA5E9]"
          }`}
          type={type}
          placeholder={place}
          title={title}
        />
      )}
      {errors?.[name] && (
        <p className="text-[#E14942] text-[12px]">{errors[name]} </p>
      )}
    </div>
  );
};
