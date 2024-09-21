import { createSlice } from "@reduxjs/toolkit";

export const liContacts = (state) => state.contacts.items;
const slise = createSlice({
    name: "contacts",
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
    },
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items=state.items.filter((task) => task.id !== action.payload);
        },
    }

});


export const {addContact, deleteContact } = slise.actions;
export default slise.reducer;

{/*export const addContact = createAction("contacts/ addContact"); 
export const deleteContact = createAction("contacts/deleteContact");

export default function contactsReducer(state = {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
}, action) {
    switch (action.type) {
        case "contacts/ addContact":
            return {
                ...state,
                items: [...state.items, action.payload] ,
            }
        case "contacts/deleteContact":
            return {
                ...state,
                items: state.items.filter((task) => task.id !== action.payload.id),
            }
        default:
            return state;
    }
};*/}