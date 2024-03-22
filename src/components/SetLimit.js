import { useState } from "react";
import {useLocalStorage} from "@uidotdev/usehooks"
const SetLimit = ({ closePopup }) => {
  const [limit, setLimit] = useLocalStorage("limit", {
    daily: 0,
    monthly: 0,
    yearly: 0,
  });
  const [limitState, setLimitState] = useState({
    daily: limit.daily,
    monthly: limit.monthly,
    yearly: limit.yearly,
  });
  function addTask() {
    setLimit(() => {
      return {
        ...limitState,
      };
    });
    closePopup(false);
  }
  return (
    <div className="w-[300px] h-[300px]  p-5 flex flex-col justify-between ">
      <h2>Daily Limit</h2>
      <input
        type="number"
        value={limitState.daily}
        onChange={(e) => {
          setLimitState({
            ...limitState,
            daily: e.target.value,
          });
        }}
        className="w-5/6 border-2 border-teal-600 rounded-md p-2  "
        placeholder="Enter Yearly Limit"
      ></input>
      <h2>Montly Limit</h2>
      <input
        type="number"
        value={limitState.monthly}
        onChange={(e) => {
          setLimitState({
            ...limitState,
            monthly: e.target.value,
          });
        }}
        className="w-5/6 border-2 border-teal-600 rounded-md p-2  "
        placeholder="Enter Yearly Limit"
      ></input>
      <h2>Yearly Limit</h2>
      <input
        type="number"
        value={limitState.yearly}
        onChange={(e) => {
          setLimitState({
            ...limitState,
            yearly: e.target.value,
          });
        }}
        className="w-5/6 border-2 border-teal-600 rounded-md p-2  "
        placeholder="Enter Yearly Limit"
      ></input>
      <button
        className="bg-teal-600 text-white rounded-md px-5 py-2 font-medium mt-2"
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
};
export default SetLimit;
