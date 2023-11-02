import React, {useState} from 'react';
import { format } from 'date-fns';

function FormSub() {

    const myDate = new Date();
    const formattedDate = format(myDate, 'yyyy-mm-dd');

    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)

    const handleDescription = (event) => {setDescription(event.target.value)}
    const handleCategory = (event) => {setCategory(event.target.value)}
    const handleAmount = (event) => {setAmount(parseInt(event.target.value))}

    function sendData(transaction) {
        fetch('http://localhost:3001/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: transaction })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const transactionData = JSON.stringify({
            date: formattedDate,
            description: description,
            category: category,
            amount: amount
        })
        // console.log('Yes I am happening')
        // console.log(transactionData);

        sendData(transactionData);

        setDescription('')
        setCategory('')
        setAmount(0)

        event.target.reset()
    }

    return (
        <form id='form-submit' onSubmit={handleSubmit}>
                <h2>New Transaction Submission</h2>
        <p>Enter description: <input type='text' onChange={handleDescription} /></p>
        
        <p>Choose category:  <select onChange={handleCategory} >
            <option>Choose Category</option>
            <option value="Income" >Income</option>
            <option value="Fashion">Fashion</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
        </select>
        </p>

        <p>Enter amount: <input type="number" onChange={handleAmount} /></p>

        <button type='submit'>Submit</button>
        </form>
    )
}

export default FormSub;