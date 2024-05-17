import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectNameFilter = state => state.filter.name;



export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
        console.log("Contacts:", contacts);
        console.log("Name filter:", nameFilter);
        if (!nameFilter) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(nameFilter.toLowerCase())
        );
    }
);

