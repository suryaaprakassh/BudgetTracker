export const AddBudget = () => {
	return (
		<div className="w-[300px] h-[200px] mb-5 p-5 flex flex-col justify-around items-center">
			<input
				type="text"
				className="w-5/6 border-2 border-teal-600 rounded-md p-2  "
				placeholder="Enter budget name"></input>
			<input
				type="number"
				className=" w-5/6 border-2 border-teal-600 rounded-md p-2  "
				placeholder="Enter max amount"></input>
		</div>
	);
};
