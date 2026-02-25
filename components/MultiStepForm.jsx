"use client";
import { useEffect, useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { Button } from "./Button";
import { Header } from "./Header";
import { StepFour } from "./StepFour";
import { AnimatePresence, motion } from "motion/react";

export const MultiStepForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localData, setLocalData] = useState({});

  const [errors, setErrors] = useState({});
  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("data"));
    if (localStorageData) {
      setLocalData(localStorageData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(localData));
  }, [localData]);

  const validate = (data) => {
    const errors = {};

    const first = data.get("first");
    const last = data.get("last");
    const user = data.get("user");
    const email = data.get("email");
    const number = data.get("number");
    const pass = data.get("pass");
    const confirmPass = data.get("confirmPass");
    const date = data.get("date");
    const img = data.get("img");

    if (currentIndex === 0) {
      if (!first || first.length < 5)
        errors.first =
          "First name cannot contain special characters or numbers.";
      if (!last || last.length < 5)
        errors.last = "Last name cannot contain special characters or numbers.";
      if (!user || user.length < 5)
        errors.user =
          "This username is already taken. Please choose another one.";
    }

    if (currentIndex === 1) {
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        errors.email = "Please provide a valid email address.";
      if (!number.match(/^\+?\d{8}$/))
        errors.number = "Please enter valid phone number.";
      if (!pass || pass.length < 6)
        errors.pass = "Password must include letters and numbers.";
      if (!confirmPass || confirmPass !== pass)
        errors.confirmPass = "Password do not match. Please try again.";
    }
    if (currentIndex === 2) {
      if (!date) errors.date = "Please select a date";
      if (!img) errors.img = "Image cannot be blank";
    }

    console.log(first, last, user, number, email, pass, confirmPass, date, img);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLocalData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const continueBtn = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const backBtn = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    if (!validate(data)) {
      return null;
    }

    const updatedData = {};
    data.forEach((value, key) => {
      updatedData[key] = value;
    });
    setLocalData((prev) => ({ ...prev, ...updatedData }));

    setCurrentIndex(currentIndex + 1);
  };

  if (currentIndex === 3) {
    return (
      <div className=" bg-white p-8 flex flex-col  justify-between">
        <StepFour />
      </div>
    );
  }

  return (
    <div>
      <form
        className="w-120 h-[655px] bg-white p-8 flex flex-col overflow-hidden justify-between"
        onSubmit={submitHandler}
      >
        <div className="">
          <Header />

          <AnimatePresence>
            <CurrentStep handleChange={handleChange} errors={errors} localData={localData}/>
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          {currentIndex !== 0 ? (
            <Button
              type="button"
              isContinue={false}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              buttonsName="<  Back"
              backBtn={backBtn}
            />
          ) : null}

          {currentIndex < 2 ? (
            <Button
              isContinue={true}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              buttonsName="Continue"
              continueBtn={continueBtn}
            />
          ) : (
            <Button
              isContinue={true}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              buttonsName="Submit"
              continueBtn={continueBtn}
            />
          )}
        </div>
      </form>
    </div>
  );
};

// localstorage.getItem = zaaval JSON.parse aar orooj objectiig string bolgoh ystoi
// localStorage.setItem = zaaval JSON.stringify aar orooj string bolgoh ystoi
// object bish gantshan item avmaar baigaa tohioldold JSON bichih shaardlaga baihgui

{
  /*

json ashiglaj objectiig string bolgoson



      

pass. match
      /^(?=*[A-Z])(?=*\d)[A-Za-z\d]{6, 20}$/



 const prevData = JSON.parse(localStorage.getItem("data"));


      */
}
{
  /*
useEffect(() => {
    const localStorageData = localStorage.getItem("first");
    if (localStorageData) {
      setLocalData((prevData) => ({ ...prevData, first: localStorageData }));
      console.log(localStorageData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("first", localData.first);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("last");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, last: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("last", localData.last);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("user");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, user: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("user", localData.user);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("email");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, email: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("email", localData.email);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("number");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, number: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("number", localData.number);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("pass");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, pass: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("pass", localData.pass);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("confirmPass");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, confirmPass: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("confirmPass", localData.confirmPass);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("date");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, date: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("date", localData.date);
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("img");
    if (localStorageData) {
      setLocalData((prev) => ({ ...prev, img: localStorageData }));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("img", localData.img);
  }, []);
 */
}
