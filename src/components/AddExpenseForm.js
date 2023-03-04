import { useRef } from "react";
import { useBudgets } from "../Contexts/Budgets";
import { v4 as uuid } from "uuid";
export const AddExpenseForm = ({ id, closePopup }) => {
	const { addExpense } = useBudgets();
	function addNewExpense() {
		addExpense({
			id: uuid(),
			budget_id: id,
			desc: nameRef.current.value,
			amount: parseInt(exRef.current.value),
		});
		closePopup();
	}
	const nameRef = useRef("");
	const exRef = useRef(0);
	return (
		<div className="w-[300px] h-[200px]  p-5 flex flex-col justify-between items-center">
			<input
				type="text"
				ref={nameRef}
				className="w-5/6 border-2 border-teal-600 rounded-md p-2  "
				placeholder="Enter Description"></input>
			<input
				type="number"
				ref={exRef}
				className=" w-5/6 border-2 border-teal-600 rounded-md p-2  "
				placeholder="Enter expenditure"></input>
			<button
				className="bg-teal-600 text-white rounded-md px-5 py-2 font-medium "
				onClick={addNewExpense}>
				Add
			</button>
		</div>
	);
};
