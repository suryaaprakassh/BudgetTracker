import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorage from "./useLocalStorage";
const BudgetContext = React.createContext();

export function useBudgets() {
	return useContext(BudgetContext);
}
export const BudgetProvider = ({ children }) => {
	const [budget, setBudget] = useLocalStorage("budgets", []);
	const [expense, setExpense] = useLocalStorage("expense", []);
	const addBudget = ({ name, max }) => {
		setBudget((prevBudget) => {
			if (prevBudget.find((budget) => budget.name === name)) {
				return prevBudget;
			}
			return [...prevBudget, { id: uuid(), name, max }];
		});
	};
	const deleteBudget = (id) => {
		setBudget(budget.filter((f) => f.id !== id));
	};
	const addExpense = ({ desc, amount, budget_id }) => {
		setExpense((prevExpense) => {
			return [...prevExpense, { id: uuid(), desc, amount, budget_id }];
		});
	};
	const getExpense = (id) => {
		return expense.filter((f) => f.budget_id === id);
	};
	const deleteExpense = (id) => {
		setExpense(expense.filter((f) => f.id !== id));
	};
	return (
		<BudgetContext.Provider
			value={{
				budget,
				addBudget,
				deleteBudget,
				deleteExpense,
				addExpense,
				getExpense,
			}}>
			{children}
		</BudgetContext.Provider>
	);
};
