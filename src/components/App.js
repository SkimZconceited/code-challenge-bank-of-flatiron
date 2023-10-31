import React, {useState, useEffect} from 'react';
import Header from './Header';
import Table from './Table';
import FormSub from './FormSub';




function App() {
    const [transactions, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/transactions') 
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            console.log(data)
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

    return (
        <div className='App'>
            <Header />
            <FormSub />
            {/* <Table transactions={transactions.transactions}/> */}
        </div>
    );
}

export default App;