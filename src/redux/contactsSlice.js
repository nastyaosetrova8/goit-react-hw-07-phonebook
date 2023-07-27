import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './contactsThunks';

export const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

function handlePending(state) {
  state.contacts.isLoading = true;
  state.contacts.error = null;
}

function handleRejected(state, { payload }) {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
}

function handleFulfilled(state, { payload }) {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilled)

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(action=>action.type.endsWith('/pending'), handlePending)
      .addMatcher(action=>action.type.endsWith('/rejected'), handleRejected)
  },
});

export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
