export const selectIsModalAddTransactionOpen = (state) =>
  state.global.isModalAddTransactionOpen;

export const selectIsModalEditTransactionOpen = (state) =>
  state.global.isModalEditTransactionOpen;

export const selectIsModalLogoutOpen = (state) =>
  state.global.isModalLogoutOpen;

export const selectTransactionToEdit = (state) =>
  state.global.transactionToEdit;
