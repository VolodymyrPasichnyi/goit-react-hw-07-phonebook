import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63e289ae3e12b1937642396f.mockapi.io'


export const fetchContacts = createAsyncThunk('contacts/fetch', 
    async(_, thunkAPI) => {
        try {
            const { data } = await axios('/contacts')
            return data
        } catch (error) {
            return thunkAPI.rejectedWithValue(error.message)
        }
    }
)
