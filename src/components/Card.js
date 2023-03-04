import { ProgressBar } from "../components/ProgressBar";
const Card = ({ name, curr, max }) => {
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
				<ProgressBar size={(curr / max) * 100} />
				<button className="mx-5 p-2 bg-teal-600 text-white rounded-md ">
					Add Expense
				</button>
			</div>
		</div>
	);
};

export default Card;
