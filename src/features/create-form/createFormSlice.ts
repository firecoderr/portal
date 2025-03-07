import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the form state structure
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
  files: any[]; // Here will be files, can define the file type if needed
}

// Initialize the state with empty values
const initialState: FormState = {
  firstName: "",
  lastName: "",
  fatherName: "",
  citizenship: "",
  typeOfAttendence: "",
  educationalInstitution: "",
  country: "",
  city: "",
  purpose: "",
  residence: "",
  phoneNumber: "",
  email: "",
  whatsApp: "", // Optional field
  telegram: "", // Optional field
  files: [],
};

// Create the form slice
export const formSlice = createSlice({
  name: "form", // Change the name from "counter" to "form"
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setFatherName: (state, action: PayloadAction<string>) => {
      state.fatherName = action.payload;
    },
    setCitizenship: (state, action: PayloadAction<string>) => {
      state.citizenship = action.payload;
    },
    setTypeOfAttendence: (state, action: PayloadAction<string>) => {
      state.typeOfAttendence = action.payload;
    },
    setEducationalInstitution: (state, action: PayloadAction<string>) => {
      state.educationalInstitution = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setPurpose: (state, action: PayloadAction<string>) => {
      state.purpose = action.payload;
    },
    setResidence: (state, action: PayloadAction<string>) => {
      state.residence = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setWhatsApp: (state, action: PayloadAction<string>) => {
      state.whatsApp = action.payload;
    },
    setTelegram: (state, action: PayloadAction<string>) => {
      state.telegram = action.payload;
    },
    setFiles: (state, action: PayloadAction<any[]>) => {
      state.files = action.payload;
    },
  },
});

// Export action creators for each reducer
export const {
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
} = formSlice.actions;

export default formSlice.reducer;
