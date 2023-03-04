import TopElement from "./components/TopElement";
import Card from "./components/Card";
import Modal from "./utilities/Modal";
import { AddBudget } from "./components/AddBudget";
import { useState } from "react";
function App() {
	const [isOpenAdd, setAddOpen] = useState(false);
	return (
		<div className="App">
			<TopElement setOpen={setAddOpen} />
			<Card name="Food" curr={800} max={1000} />
			<Card name="Entertainment" curr={1400} max={1500} />
			<Card name="Medical" curr={600} max={1500} />
			<Modal open={isOpenAdd} setOpen={setAddOpen} submit>
				<AddBudget />
			</Modal>
		</div>
	);
}

export default App;
