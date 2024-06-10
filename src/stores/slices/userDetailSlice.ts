import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query";

const initialState = {
  user: {},
  status: "idle",
  error: null,
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {},
});

export default userDetailSlice.reducer;
