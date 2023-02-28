const Card = ({ name, curr, max, size }) => {
	return (
		<div className="my-5 p-4 border-2 border-black-300 rounded-md bg-gray-100 w-[550px] mx-auto ">
			<div className="flex justify-between">
				<div className="text-xl inline-block ">{name}</div>
				<div className="p-5">
					{" "}
					<span className="text-lg font-medium mx-1 ">${curr}</span>
					<span className="text-sm font-sm text-gray-500 mx-1">/${max}</span>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="w-8/12 h-4 rounded-lg bg-gray-200 ">
					<div
						className="w-8/12 h-4 rounded-lg bg-cyan-500"
						style={{ width: size }}></div>
				</div>
				<button className="mx-5 p-2 bg-teal-600 text-white rounded-md ">
					Add Expense
				</button>
			</div>
		</div>
	);
};

export default Card;
