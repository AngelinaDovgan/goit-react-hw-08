import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        name: ""
    },
    reducers: {
        changeFilter(state, action) {
                state.name = action.payload;
            },
    },
});

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
        if (!nameFilter) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(nameFilter.toLowerCase())
        );
    }
);

// export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;