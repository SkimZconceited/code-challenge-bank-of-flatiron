import React, {useState, useEffect} from 'react';
import Header from './Header';
import Table from './Table';
import FormSub from './FormSub';
import Search from './Search';



function App() {
    
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/transactions') 
          .then((response) => response.json())
          .then((data) => {
            setTransactions(data);
        })
    }, []);
    
    console.log(transactions)
    return (
        <div className='App'>
            <Header />
            <FormSub />
            <Search initialData={transactions} />
            <Table transactions={transactions} />
        </div>
    );
}

export default App;