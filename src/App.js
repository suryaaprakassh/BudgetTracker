import TopElement from "./components/TopElement";
import Card from "./components/Card";
import Modal from "./utilities/Modal";
import { AddBudget } from "./components/AddBudget";
import { useState } from "react";
import { useBudgets } from "./Contexts/Budgets";
function App() {
	const [isOpenAdd, setAddOpen] = useState(false);
	const { budget, getExpense } = useBudgets();
	return (
		<div className="App">
			<TopElement setOpen={setAddOpen} />
			{budget.map((b) => {
				const amount = getExpense(b.id);
				return (
					<Card
						key={b.id}
						id={b.id}
						name={b.name}
						curr={amount.reduce((tot, curr) => tot + curr.amount, 0)}
						max={b.max}
					/>
				);
			})}
			<Modal open={isOpenAdd} setOpen={setAddOpen}>
				<AddBudget closePopup={setAddOpen} />
			</Modal>
		</div>
	);
}

export default App;
