function Table({ transactions}) {
    console.log(transactions[0])
    return (
    <div>
    <h3>Table of Transactions</h3>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
            </tr>
        </thead>
        <tbody>
                {transactions.map((transaction, index) => {
                    return (
                        <tr key={index}>
                            <td>{transaction.id}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    )
                })}
        </tbody>
    </table>
    </div>
    )
}

export default Table;