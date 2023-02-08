import { createSlice } from "@reduxjs/toolkit"
import { fetchContacts } from "./operations"


export const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
      contacts: {
        items: [],
        isLoading: false,
        error: null,
      },
    },
    extraReducers: builder => {
      builder
          .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true
          })
          .addCase(fetchContacts.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.error = null
            state.items.push(payload)
          })
          .addCase(fetchContacts.rejected, (state , {payload}) => {
            state.error = payload
          })
    }
})


export default contactsSlice.reducer