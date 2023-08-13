import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const budgetMax = 20000;

const Budget = () => {
  const { budget, totalExpenses,currency, dispatch } = useContext(AppContext);

  const onChangeBudgetHandler = (event) => {
    const enteredValue = Number(event.target.value);

    
    if (enteredValue < totalExpenses) {
      alert(
        "The value of the buget can't be lower than the expenses value " +
          currency +
          totalExpenses
      );

      return;
    }
     else {
      if (enteredValue > budgetMax) {
        alert('Please enter a value less that ' + budgetMax);
        return;
      }

      dispatch({
        type: 'SET_BUDGET',
        payload: enteredValue,
      });
    }
  };

  return (
    <div
      className="alert alert-secondary"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div>
        <label htmlFor="budget">Budget:&nbsp;</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>{currency}</span>
        <input
          required="required"
          placeholder='enter your budget'
          type="number"
          id="budget"
          value={budget}
          step="10"
          onChange={onChangeBudgetHandler}
        ></input>
      </div>
    </div>
  );
};

export default Budget;