import { useBudgets } from "../Contexts/Budgets";

const getLocalTime = (utc) => {
  let localDate = new Date(utc);
  let year = localDate.getFullYear();
  let month = String(localDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  let day = String(localDate.getDate()).padStart(2, '0');
  let hours = String(localDate.getHours()).padStart(2, '0');
  let minute= String(localDate.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}   ${hours}:${minute}`;
}


export const ExpenseElement = ({ elem }) => {
	const { deleteExpense } = useBudgets();
	return (
		<h2
			key={elem.id}
			className="p-1 flex justify-between items-baseline space-x-9 m-1 bg-gray-100 border-2 border-gray-200 rounded-md">
			<span className="text-xl ">{elem.desc}</span>
			<div className="flex space-x-10">
				<div className="text-lg font-medium ">₹ {elem.amount}</div>
        <div className="text-lg font-medium ">{getLocalTime(elem.time)}</div>
				<button
					className="ml-7 bg-red-500 rounded-sm p-1 text-white"
					onClick={() => {
						deleteExpense(elem.id);
					}}>
					<i className="fa fa-trash"></i>
				</button>
			</div>
		</h2>
	);
};
