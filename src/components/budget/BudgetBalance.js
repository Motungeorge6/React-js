import axios from "axios";
import React, {useEffect, useState} from "react";
import "./budgetBalance.css"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

 const BudgetBalance = (props)=>{
 let initialValue = props.balance
 const [input,setInput] = useState(initialValue)
 const[exchangeRate,setExchangeRate] = useState({})
 const {budgetAmount} =useSelector(state.budgetReducer)
     let history = useHistory()

     const handleInput = (e) => {
         setInput(e.target.value)
     }

     const handleSelect = (e) => {
          props.setBalance((input * exchangeRate[e.target.valueOf]))
          history.push
         
        //  setSelectOption(e.target.value)
     }
    
     
     useEffect(()=>{
        axios.get('https://v6.exchangerate-api.com/v6/67b9ab5bdbd80a7eab7d154a/latest/NGN')
        .then((response)=>
        {setExchangeRate(response.data.conversion_rates)
            setSelectOption(Object.keys(response.data.conversion_rates)[0])
        })
            
     },[])
      
     useEffect(()=>{
             console.log("i just MOUNTED @ Budget Balance")
             return ()=>{
                 console.log("i just UNMOUNTED @ Budget Balance")
             }
          }, [props.balance])
         
     
     return(
         <div className="budgetBalance">
             <div className="balance">
                 {props.balance}
             </div>
             <select className="balance-dropdown" onChange={handleSelect}>
                 {Object.keys(exchangeRate).length > 0 &&
                 Object.keys(exchangeRate).map(
                     (data,index)=> <option key={index}>{data}</option>)}   
             </select>
             <div className="balance-button">
                 <input type="number" onChange={handleInput}/>
                 <button onClick={() => props.setBalance(input)}>Update Balance</button>
             </div>
         </div>
         
         
     )
 }
 export default BudgetBalance