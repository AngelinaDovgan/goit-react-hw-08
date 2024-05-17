// export const selectNameFilter = state => state.filters.name;

// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectNameFilter],
//     (contacts, nameFilter) => {
//         if (!nameFilter) {
//             return contacts;
//         }
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(nameFilter.toLowerCase())
//         );
//     }
// );