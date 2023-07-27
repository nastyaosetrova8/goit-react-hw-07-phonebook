import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getAllContacts } from "services/api";

export  const getAllContactsThunk = createAsyncThunk(
    'contacts/getContacts',
    async (_, thunkAPI) => {
try {
    const contactList = await getAllContacts();
    return contactList;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }
);

export  const addContactThunk = createAsyncThunk(
    'contact/addContact',
    async (contacts, thunkAPI) => {
try {
    const contactList = await addContact(contacts);
    return contactList;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkAPI) => {
        try {
            const contactList = await deleteContact(id);
            return contactList;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);