export const setBudget = (item) => ({type: 'SET_BUDGET', payload: item})
export const addItemToBudget = (items) => ({type: 'ADD_TO_BUDGET',payload: items})
export const updateBudgetAction = (item) => ({type: 'UPDATE_BUDGET',payload: item})
export const deleteBudgetAction = (id) => ({type: 'DELETE_BUDGET',payload: id})