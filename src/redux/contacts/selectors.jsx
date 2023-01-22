import { createSelector } from '@reduxjs/toolkit';

export const selectFilterByName = state => state.filter;

export const selectContact = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = createSelector(
  [selectContact, selectFilterByName],
  (contacts, filter) => {
    const filterByName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterByName)
    );
  }
);
