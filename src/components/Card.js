import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Modal from "../utilities/Modal";
import { Expenses } from "./Expenses";
import { AddExpenseForm } from "./AddExpenseForm";
const Card = ({ id, name, curr, max }) => {
	const [isAddExpense, setAddExpense] = useState(false);
	const [isViewExpense, setViewExpense] = useState(false);
	return (
		<>
			<div className="my-5 p-4 border-2 border-black-300 rounded-md bg-gray-100 w-[550px] mx-auto ">
				<div className="flex justify-between">
					<div className="text-xl inline-block ">{name}</div>
					<div className="p-5">
						{" "}
						<span className="text-lg font-medium mx-1 ">₹{curr}</span>
						<span className="text-sm font-sm text-gray-500 mx-1">/₹{max}</span>
					</div>
				</div>

				<ProgressBar size={(curr / max) * 100} />
				<div className="flex justify-around items-center">
					<button
						onClick={() => {
							setAddExpense(true);
						}}
						className="mx-5 p-2 bg-teal-600 ml-auto text-white rounded-md ">
						Add Expense
					</button>
					<button
						onClick={() => {
							setViewExpense(true);
						}}
						className="mx-5 p-2 border-teal-600 border-2 font-medium text-black rounded-md">
						View Expense
					</button>
				</div>
			</div>
			<Modal open={isAddExpense} setOpen={setAddExpense}>
				<AddExpenseForm id={id} closePopup={setAddExpense} />
			</Modal>
			<Modal open={isViewExpense} setOpen={setViewExpense}>
				<Expenses id={id} closePopup={setViewExpense} />
			</Modal>
		</>
	);
};

export default Card;
