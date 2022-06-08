import React  from "react";
import "./budgetbody.css"
import BudgetDetails from "./BudgetDetails";
import BudgetEntry from "./BudgetEntry";
import { useParams } from "react-router-dom";

const BudgetBody = (props)=>{
 
    let {balance,setBalance,budget,setBudget} = props
    let {identity} = useParams()

    const Greeting = () =>{
        let myDate = new Date().getHours()
        let greet;

        if (myDate < 12)
            greet = "Morning"
        else if (myDate >=12 && myDate < 17)
            greet = "Afternoon"
        else
            greet = "Evening"

        return greet
    }

    return(
        <div className="budget-body">
            <div className="text-intro">
                <h1>Good {Greeting}, {identity}! Welcome To Your Personal Budget</h1>
            <h1> </h1>
            <p>Enter the price,description and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
                <BudgetDetails budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
            </div>
        </div>
        
    )
}
export default BudgetBody