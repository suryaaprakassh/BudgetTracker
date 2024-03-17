import TopElement from "./components/TopElement";
import Card from "./components/Card";
import Modal from "./utilities/Modal";
import SideElement from "./components/SideElement";
import SetLimit from "./components/SetLimit";
import { AddBudget } from "./components/AddBudget";
import { useState } from "react";
import { useBudgets } from "./Contexts/Budgets";
function App() {
  const [isOpenAdd, setAddOpen] = useState(false);
  const [isOpenLimit, setLimitpen] = useState(false);
  const { budget, getExpense } = useBudgets();
  return (
    <div className="App">
      <TopElement setOpen={setAddOpen} setLimitOpen={setLimitpen}/>
      <div className="flex justify-around h-screen p-5">
        <SideElement />
        <div className="w-4/5 flex flex-col">
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
        </div>
      </div>
      <Modal open={isOpenAdd} setOpen={setAddOpen}>
        <AddBudget closePopup={setAddOpen} />
      </Modal>
      <Modal open={isOpenLimit} setOpen={setLimitpen}>
        <SetLimit closePopup={setLimitpen}/>
      </Modal>
    </div>
  );
}

export default App;
