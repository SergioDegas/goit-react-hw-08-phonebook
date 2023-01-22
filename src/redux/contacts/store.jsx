import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: filtersReducer,
  },
});
