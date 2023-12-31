import React, {useState, useEffect} from 'react';
import Header from './Header';
import Table from './Table';
import FormSub from './FormSub';
import Search from './Search';



function App() {
    
    const [transactions, setTransactions] = useState([]);
    // const [resData, setResData] = useState([])
    // const [isTrue, setIsTrue] = useState(false)
    // const arrayResult = []

    
    useEffect(() => {
        fetch('http://localhost:3001/transactions') 
          .then((response) => response.json())
          .then((data) => {

            setTransactions(data);
            // setResData(data)
            // setIsTrue(true)
        })
    }, []);
    
    
    // useEffect(() => {
    //     resData.map((item) => console.log(item))
    // }, [isTrue])
    
    // console.log(arrayResult)

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