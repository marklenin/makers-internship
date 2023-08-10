import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../consts";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      let formData = new FormData();
      formData.append("username", data.Username);
      formData.append("email", data.Email);
      formData.append("phone", data.Phone);
      formData.append("password", data.Password);
      formData.append("password_confirm", data.Password_confirm);

      await axios.post(`${API}account/register/`, formData);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }

    // try {
    //   await axios.post(`${API}/account/register/`, formData);
    // } catch (error) {
    //   return rejectWithValue(error);
    // }
  }
);
