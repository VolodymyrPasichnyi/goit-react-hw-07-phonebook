  import { createSlice } from "@reduxjs/toolkit"


export const contactsSlice = createSlice({
    name: 'contacts', 
    initialState: {
      contacts: {
        items: [],
        isLoading: false,
        error: null,
      },
      filter: ""
    },
    extraReducers: builder  => {
      builder
        .addCase()
      

        // addContact(state, action) {
        //     state.contacts.push(action.payload)
        // },
        // deleteContact(state, action) {
        //     state.contacts = state.contacts.filter(item => item.id !== action.payload)
        // },
        // changeFilter(state, action) {
        //     state.filter = action.payload
        // }
    }
})


export const { addContact, deleteContact, changeFilter } = contactsSlice.actions
export default contactsSlice.reducer