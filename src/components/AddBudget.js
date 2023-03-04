import { useBudgets } from "../Contexts/Budgets";
import { useRef } from "react";
export const AddBudget = ({ closePopup }) => {
	const nameRef = useRef("");
	const maxRef = useRef("");
	const { addBudget } = useBudgets();
	function addTask() {
		addBudget({
			name: nameRef.current.value,
			amount: 0,
			max: parseInt(maxRef.current.value),
		});
		closePopup(false);
	}
	return (
		<div className="w-[300px] h-[200px]  p-5 flex flex-col justify-between items-center">
			<input
				type="text"
				ref={nameRef}
				className="w-5/6 border-2 border-teal-600 rounded-md p-2  "
				placeholder="Enter budget name"></input>
			<input
				type="number"
				ref={maxRef}
				className=" w-5/6 border-2 border-teal-600 rounded-md p-2  "
				placeholder="Enter max amount"></input>
			<button
				className="bg-teal-600 text-white rounded-md px-5 py-2 font-medium "
				onClick={addTask}>
				Add
			</button>
		</div>
	);
};
