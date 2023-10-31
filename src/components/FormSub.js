import React, {useState, useEffect} from 'react';
import { format } from 'date-fns';

function FormSub() {
    const handleSub = (e) => {
        e.preventDefault()
        // handleInput(e);
        console.log('Form submitted');
    };
    

    const [inDate, setInDate] = useState('');
    const [inCat, setInCat] = useState('');
    const myDate = new Date();
    const formattedDate = format(myDate, 'yyyy-mm-dd');

    console.log(formattedDate);

    const handleInput = (e) => {
        setInDate(Date.now())
        setInCat(e.target.value)
        console.log(inDate, inCat);
    };

        return (
            <div id="form-Sub">
                <h2>New Transaction Submission</h2>
      <form onSubmit={handleSub}>
        <p>Enter description: <input placeholder="Description..." onSubmit={handleInput} /></p>
        
        <div id="div-category">
        <p>Choose category:</p>

        <select id="dropdown-categories" name="categories" onSubmit={handleInput}>
            <option value="income" >Income</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
        </select>
        </div>

        <p>Enter amount: <input type="number" placeholder="Amount(kes)..." onSubmit={handleInput} /></p>

        <input type="submit" value="Submit Transaction" onClick={() => console.log('Submitted')} />
      </form>
    </div>
  );
}

export default FormSub;