import { ProgressBar } from "./ProgressBar";
import { useBudgets } from "../Contexts/Budgets";
import { useEffect, useState } from "react";
import {useLocalStorage} from "@uidotdev/usehooks"

export default function SideElement() {
  const { expense } = useBudgets();
  const [limit,setLimit]=useLocalStorage("limit", {})
  const [spend,setSpend]=useState({
    daily:0,
    monthly:0,
    yearly:0
  });

  useEffect(()=>{
    setSpend({
      daily:0,
      monthly:0,
      yearly:0
    })
    setSpend((prevSpend)=>{
      return {
        ...prevSpend,
        yearly:expense.reduce((tot,curr)=>{
          if(Date.now()-curr.time<31536000000){
            return tot+curr.amount
          }
          return tot
        },0)
      }
    })
    setSpend((prevSpend)=>{
      return {
        ...prevSpend,
        monthly:expense.reduce((tot,curr)=>{
          if(Date.now()-curr.time<2592000000){
            return tot+curr.amount
          }
          return tot
        },0)
      }
    })
    for(let exp of expense){
      if(Date.now()-exp.time<86400000){
        setSpend((prevSpend)=>{
          return {
            ...prevSpend,
            daily:prevSpend.daily+exp.amount
          }
        })
      }
    }
  },[expense])
  
  return (
    <div className="w-1/5 justify-self-start">
      <div>
        <h2>Daily Spend {spend.daily} / {limit.daily}</h2>
        <ProgressBar size={spend.daily/parseInt(limit.daily)*100} />
      </div>
      <div>
        <h2>Montly Spend {spend.monthly} / {limit.monthly}</h2>
        <ProgressBar size={spend.monthly/parseInt(limit.monthly)*100} />
      </div>
      <div>
        <h2>Yearly Spend {spend.yearly} / {limit.yearly}</h2>
        <ProgressBar size={spend.yearly/parseInt(limit.yearly)*100} />
      </div>
    </div>
  );
}
