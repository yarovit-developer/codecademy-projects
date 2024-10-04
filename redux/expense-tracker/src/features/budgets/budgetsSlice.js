import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets', // slice name here,
  initialState: initialState, // initial state here,
  reducers: {
    editBudget: (state, action) => {
      const {category, amount} = action.payload;
      const budgetToUpdate = state.find(budget=>budget.category === category);
      if(budgetToUpdate) {
        budgetToUpdate.amount = amount;
      }
    }
  },
})


export const selectBudgets = (state) => state.budgets;
export const {editBudget} = budgetsSlice.actions;
export default budgetsSlice.reducer;
