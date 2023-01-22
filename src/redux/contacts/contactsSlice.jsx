import { createSlice } from '@reduxjs/toolkit';
import { ContactAddApi, ContactDeleteApi, fetchContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchItemsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const addItemsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const deleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const ContactSlice = createSlice({
  name: 'Contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(ContactAddApi.pending, handlePending)
      .addCase(ContactDeleteApi.pending, handlePending)
      .addCase(fetchContact.rejected, handleRejected)
      .addCase(ContactAddApi.rejected, handleRejected)
      .addCase(ContactDeleteApi.rejected, handleRejected)
      .addCase(fetchContact.fulfilled, fetchItemsFulfilled)
      .addCase(ContactAddApi.fulfilled, addItemsFulfilled)
      .addCase(ContactDeleteApi.fulfilled, deleteContact);
  },
});
// export const { addContact, deleteContact } = ContactSlice.actions;
export const ContactsReducer = ContactSlice.reducer;
