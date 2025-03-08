import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const sendForm = createAsyncThunk(
  "create-form/sendForm",
  async function (form, { rejectWithValue }) {},
);

export interface FormState {
  form: {
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
  };
  status: "loading" | "succeed" | "failed" | null;
  error: string | null;
}

const initialState: FormState = {
  form: {
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
    diploma: "",
  },
  status: null,
  error: null,
};

export const formSlice = createSlice({
  name: "create-form",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.form.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.form.lastName = action.payload;
    },
    setFatherName: (state, action: PayloadAction<string>) => {
      state.form.fatherName = action.payload;
    },
    setCitizenship: (state, action: PayloadAction<string>) => {
      state.form.citizenship = action.payload;
    },
    setTypeOfAttendence: (state, action: PayloadAction<string>) => {
      state.form.typeOfAttendence = action.payload;
    },
    setEducationalInstitution: (state, action: PayloadAction<string>) => {
      state.form.educationalInstitution = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.form.country = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.form.city = action.payload;
    },
    setPurpose: (state, action: PayloadAction<string>) => {
      state.form.purpose = action.payload;
    },
    setResidence: (state, action: PayloadAction<string>) => {
      state.form.residence = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.form.phoneNumber = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.form.email = action.payload;
    },
    setWhatsApp: (state, action: PayloadAction<string>) => {
      state.form.whatsApp = action.payload;
    },
    setTelegram: (state, action: PayloadAction<string>) => {
      state.form.telegram = action.payload;
    },
    setFiles: (state, action: PayloadAction<File>) => {
      state.form.diploma = action.payload;
    },
  },
});

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
