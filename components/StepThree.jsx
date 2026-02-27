import { useEffect, useState } from "react";
import { TextField } from "./TextField";
import { AnimatePresence, motion } from "motion/react";

export const StepThree = ({
handleChange,localData, errors
}) => {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!(localData?.img instanceof File)) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(localData.img);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [localData?.img]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-3">
        <TextField
        handleChange={handleChange}
        localData={localData}
         errors={errors}
          label="Date of birth"
          type="date"
          id="date"
          name="date"
        />
        <TextField
         handleChange={handleChange}
         localData={localData}
         errors={errors}
          previewUrl={previewUrl}
          title="Choose a video please"
          label="Profile image"
          type="file"
          id="img"
          name="img"
        />
      </div>
    </motion.div>
  );
};
