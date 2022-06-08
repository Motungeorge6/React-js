import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Budget.css'
import BudgetBalance from './components/budget/BudgetBalance'
import BudgetBody from './components/budget/BudgetBody'

const Budget = () => {
    const [balance,setBalance] = useState(100000)
    const {budgetState} = useSelector(state => state.budgetReducer)
  return (
    <div className='budget-container'>
        <BudgetBalance balance ={balance} setBalance={setBalance} budget={budget} setBudget={setBudget}/>
        <BudgetBody balance={balance} setBalance={setBalance}/>
    </div>
  )
}

export default Budget