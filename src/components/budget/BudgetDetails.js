import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { deleteBudgetAction } from '../../redux/actions/budget'
import { toDatetimeLocal } from '../../util'
import './budgetbody.css'

const BudgetDetails = (props) => {
    let {budget, setBudget,balance,setBalance} = props //destructuring 

    const{budgetState}  = useSelector((state) => state.budgetReducer)
    const dispatch = useDispatch()
 
    
     const deleteEntry =(objectId, amount) => {
    //  let newObject = [...budget]
    //  setBudget(newObject.filter((data,index)=> index !== objectId))
    //  setBalance(+balance + +budgetAmount)
    dispatch(deleteBudgetAction({id:objectId, amount}))
    }

    let location = useLocation
    let currency = new URLSearchParams(Location.search).get("currency")
  return (
    <div className='budget-details-container'>
        <h1>Details</h1>
    {budgetState.length > 0 
    ? 
    <table>
        <tr className='table-header'>
            <th>Date</th>
            <th>Budget Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th></th>
        </tr>
        {budget.map((data,index) =>
        <tr key={index} className='data-row' >
            <td>{toDatetimeLocal(data.date)}</td>
            <td>{data.budgetName}</td>
            <td>{data.budgetAmount}</td>
            <td>{data.budgetDescription}</td>
            <td><button style={{backgroundColor:"red",color:"white",padding:"2px 10px",border:"unset"}} onClick={()=> deleteEntry(index,+data.budgetAmount)}> Delete</button></td>


                
            
        </tr>)}

    </table>
     :"Empty"}
</div>    
  )
}

export default BudgetDetails