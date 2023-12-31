import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    delContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReduser = contactsSlice.reducer;
export const { delContact, addContact } = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReduser
);
