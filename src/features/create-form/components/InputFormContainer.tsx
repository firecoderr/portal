import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "../createFormSlice";
import Label from "./Label";
import Input from "./Input";
import { RootState } from "../../../app/store/store";
import Select from "./Select";

const inputs = [
  {
    fn: setFirstName,
    label: "Ном",
    stateKey: "firstName",
    type: "text",
    required: true,
    placeholder: "Давлатбек",
  },
  {
    fn: setLastName,
    label: "Насаб",
    stateKey: "lastName",
    type: "text",
    required: true,
    placeholder: "Иброҳимов",
  },
  //   {
  //     fn: setFatherName,
  //     label: "Номи падар",
  //     stateKey: "fatherName",
  //     type: "text",
  //     required: true,
  //     placeholder: "Абдуллоҳ",
  //   },
  //   {
  //     fn: setCitizenship,
  //     label: "Шаҳрвандӣ",
  //     stateKey: "citizenship",
  //     type: "text",
  //     required: true,
  //     placeholder: "Тоҷикистон",
  //   },
  //   {
  //     fn: setTypeOfAttendence,
  //     label: "Навъи ҳузур",
  //     stateKey: "typeOfAttendence",
  //     type: "select",
  //     required: true,
  //     options: ["Очни", "Заочни"],
  //   },
  //   {
  //     fn: setEducationalInstitution,
  //     label: "Муассисаи таълимӣ",
  //     stateKey: "educationalInstitution",
  //     type: "select",
  //     required: true,
  //     options: ["Иктисодй", "Тиббй"],
  //   },
  //   {
  //     fn: setCountry,
  //     label: "Кишвар",
  //     stateKey: "country",
  //     type: "text",
  //     required: true,
  //     placeholder: "Тоҷикистон",
  //   },
  //   {
  //     fn: setCity,
  //     label: "Шаҳр",
  //     stateKey: "city",
  //     type: "text",
  //     required: true,
  //     placeholder: "Душанбе",
  //   },
  //   {
  //     fn: setPurpose,
  //     label: "Мақсад",
  //     stateKey: "purpose",
  //     type: "text",
  //     required: true,
  //     placeholder: "Омӯзиш ва таҳсил",
  //   },
  //   {
  //     fn: setResidence,
  //     label: "Ҷои истиқомат",
  //     stateKey: "residence",
  //     type: "text",
  //     required: true,
  //     placeholder: "кӯчаи Рӯдакӣ",
  //   },
  //   {
  //     fn: setPhoneNumber,
  //     label: "Рақами телефон",
  //     stateKey: "phoneNumber",
  //     type: "tel",
  //     required: true,
  //     placeholder: "+992*********",
  //   },
  //   {
  //     fn: setEmail,
  //     label: "Почтаи электронӣ",
  //     stateKey: "email",
  //     type: "email",
  //     required: true,
  //     placeholder: "example@email.com",
  //   },
  //   {
  //     fn: setWhatsApp,
  //     label: "WhatsApp",
  //     stateKey: "whatsApp",
  //     type: "tel",
  //     required: false,
  //     placeholder: "+992*********",
  //   },
  //   {
  //     fn: setTelegram,
  //     label: "Telegram",
  //     stateKey: "telegram",
  //     type: "text",
  //     required: false,
  //     placeholder: "@username",
  //   },
  {
    fn: setFiles,
    label: "Диплом",
    stateKey: "diploma",
    type: "file",
    required: true,
  },
];

export interface FormState {
  firstName: string;
  lastName: string;
  fatherName: string;
  citizenship: string;
  typeOfAttendence: string;
  educationalInstitution: string;
  country: string;
  city: string;
  purpose: string;
  residence: string;
  phoneNumber: string;
  email: string;
  whatsApp: string;
  telegram: string;
  diploma: File | "";
}

const InputFormContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector((state: RootState) => state.createForm);

  console.log("form");
  console.log(form);

  return (
    <form
      className="mx-auto flex w-full max-w-[900px] flex-col gap-10 py-10"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 items-end gap-10 sm:grid-cols-2">
        {inputs.map(
          ({ fn, label, stateKey, required, type, placeholder, options }) => {
            const handleChange = useCallback(
              (e: any) => dispatch(fn(e.target.value)),
              [dispatch, fn],
            );

            if (type === "files") {
              return (
                // File inputs **************************
                <div key={stateKey}>
                  <Label required={required} htmlFor={stateKey}>
                    {label}
                  </Label>
                  <Input
                    placeholder={placeholder}
                    className="w-full"
                    required={required}
                    type={type}
                    id={stateKey}
                    value={form[stateKey]}
                    onChange={handleChange}
                  />
                </div>
              );
            } else if (type === "select") {
              // Select **************************
              return (
                <div key={stateKey}>
                  <Label required={required} htmlFor={stateKey}>
                    {label}
                  </Label>
                  <Select
                    id={stateKey}
                    className="w-full"
                    value={form[stateKey]}
                    onChange={handleChange}
                    options={options as string[]}
                  />
                </div>
              );
            } else {
              return (
                // Text inputs **************************
                <div key={stateKey}>
                  <Label required={required} htmlFor={stateKey}>
                    {label}
                  </Label>
                  <Input
                    placeholder={placeholder}
                    className="w-full"
                    type={type}
                    required={required}
                    id={stateKey}
                    value={form[stateKey]}
                    onChange={handleChange}
                  />
                </div>
              );
            }
          },
        )}
      </div>

      <button className="rounded-md bg-green-400 p-4">Отправить</button>
    </form>
  );
};

export default InputFormContainer;
