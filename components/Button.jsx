export const Button = (props) => {
  const {
    setCurrentIndex,
    currentIndex,
    buttonsName,
    isContinue,
    type,
    continueBtn,
    backBtn,
  } = props;
  if (isContinue) {
    return (
      <div className="w-full">
        <button
          type="submit"
          className="h-11  rounded-md py-[10px] w-full bg-[#121316] text-white flex justify-center items-center hover:opacity-80 gap-3"
  
        >
          <p>{`${buttonsName} ${currentIndex + 1}/3`}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
          >
            <path
              d="M1.705 0L0.294998 1.41L4.875 6L0.294998 10.59L1.705 12L7.705 6L1.705 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    );
  }
  return (
    <button
      type={type}
      className="h-11 rounded-md py-[10px] w-40 border-[1px] border-[#CBD5E1] flex justify-center items-center gap-3 hover:opacity-80"
      onClick={() => backBtn()}
    >
      <p>{buttonsName}</p>
     
    </button>
  );
};
