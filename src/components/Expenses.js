import { useBudgets } from "../Contexts/Budgets";
import { ExpenseElement } from "../components/ExpenseElement";
export const Expenses = ({ id }) => {
	const { getExpense, deleteBudget } = useBudgets();
	const expenses = getExpense(id);
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-center text-2xl font-sans font-semibold">Expenses</h1>
			<div className="py-2 max-h-[320px] min-w-[300px] overflow-y-scroll">
				{expenses.length !== 0 ? (
					expenses.map((elem) => {
						return <ExpenseElement elem={elem} />;
					})
				) : (
					<h2 className="text-center font-medium text-xl">Sorry No Expense!</h2>
				)}
			</div>

			<button
				onClick={() => {
					deleteBudget(id);
				}}
				className="font-medium ml-5 p-2 bg-red-500 ml-auto text-white rounded-md ">
				Delete
			</button>
		</div>
	);
};
