const TopElement = () => {
	return (
		<div className="flex space-between p-5">
			<p className="inline-block mr-auto text-2xl font-semibold">
				Budget Tracker
			</p>
			<button className="mx-5 p-2 bg-teal-600 text-white rounded-md ">
				Add Budget
			</button>
			<button className="mx-5 border-solid border-2 rounded-md border-teal-600 p-1 font-medium text-md  ">
				Add Expense
			</button>
		</div>
	);
};
export default TopElement;
