import { useBudgets } from "../Contexts/Budgets";
export const ExpenseElement = ({ elem }) => {
	const { deleteExpense } = useBudgets();
	return (
		<h2
			key={elem.id}
			className="p-1 flex justify-between items-baseline space-x-9 m-1 bg-gray-100 border-2 border-gray-200 rounded-md">
			<span className="text-xl ">{elem.desc}</span>
			<div>
				<span className="text-lg font-medium ">₹ {elem.amount}</span>
				<button
					className="ml-7 bg-red-500 rounded-sm p-1 text-white"
					onClick={() => {
						deleteExpense(elem.id);
					}}>
					<i className="fa fa-trash"></i>
				</button>{" "}
			</div>
		</h2>
	);
};
