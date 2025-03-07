import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../features/create-form/components/Input";
import {
  setFirstName,
  setLastName,
  setFatherName,
  setCitizenship,
  setTypeOfAttendence,
  setEducationalInstitution,
  setCountry,
  setCity,
  setPurpose,
  setResidence,
  setPhoneNumber,
  setEmail,
  setWhatsApp,
  setTelegram,
  setFiles,
} from "../../features/create-form/createFormSlice";
import { RootState } from "../store/store";
import Label from "../../features/create-form/components/Label";

const inputs = [
  { fn: setFirstName, label: "Firstname", stateKey: "firstName", type: "text" },
  { fn: setLastName, label: "Lastname", stateKey: "lastName", type: "text" },
  {
    fn: setFatherName,
    label: "Father Name",
    stateKey: "fatherName",
    type: "text",
  },
  {
    fn: setCitizenship,
    label: "Citizenship",
    stateKey: "citizenship",
    type: "text",
  },
  {
    fn: setTypeOfAttendence,
    label: "Type of Attendence",
    stateKey: "typeOfAttendence",
    type: "text",
  },
  {
    fn: setEducationalInstitution,
    label: "Educational Institution",
    stateKey: "educationalInstitution",
    type: "text",
  },
  { fn: setCountry, label: "Country", stateKey: "country", type: "text" },
  { fn: setCity, label: "City", stateKey: "city", type: "text" },
  { fn: setPurpose, label: "Purpose", stateKey: "purpose", type: "text" },
  { fn: setResidence, label: "Residence", stateKey: "residence", type: "text" },
  {
    fn: setPhoneNumber,
    label: "Phone Number",
    stateKey: "phoneNumber",
    type: "tel",
  },
  { fn: setEmail, label: "Email", stateKey: "email", type: "email" },
  { fn: setWhatsApp, label: "WhatsApp", stateKey: "whatsApp", type: "tel" },
  { fn: setTelegram, label: "Telegram", stateKey: "telegram", type: "text" },
  // { fn: setFiles, label: "Files", stateKey: "files" },
];

const CreateForm = () => {
  const dispatch = useDispatch();

  const createForm = useSelector((state: RootState) => state.createForm);

  return (
    <div className="p-5">
      <form
        className="mx-auto flex max-w-fit flex-wrap gap-10 border"
        onSubmit={(e) => e.preventDefault()}
      >
        {inputs.map(({ fn, label, stateKey }) => {
          const handleChange = useCallback(
            (e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(fn(e.target.value)),
            [dispatch, fn],
          );

          return (
            <div key={stateKey}>
              <Label required={true} htmlFor={stateKey}>
                {label}
              </Label>
              <Input
                id={stateKey}
                value={createForm[stateKey as keyof typeof createForm]}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <button>submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
