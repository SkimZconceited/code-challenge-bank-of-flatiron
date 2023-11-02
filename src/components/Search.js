import React, {useState, useEffect} from 'react'

function Search({initialData}) {
    function handleSearch(event) {
        event.preventDefault();
        // return setSearchTerm(event.target.value)
    }

    // console.log(initialData, 'initial data')
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // console.log(searchTerm)

    // useEffect(() => {
    //     // const results = initialData.map((dat) => { });
    //     // console.log(searchTerm.toLowerCase())
    //     initialData.map((dat) => {if(searchTerm === dat.description) { 
    //         return setSearchResults([dat.id, dat.date, dat.description, dat.category, dat.amount])
    //     }

    // })
    // }, [searchTerm]);

    function handleSearch(event) {
        event.preventDefault()
        initialData.map((result) => {
            if (searchTerm === result.description) {
                setSearchResults(result)
            }
        });
        console.log(searchResults, 'searchResult in')
    }
    
    console.log(searchResults, 'searchResult out')
    
    function createTable(result){
        // useEffect(() => setSearchResults(result), [searchResults])
        // setSearchResults([]);
        if (searchResults.length !== 0) {
            return (
                <>
                    <tbody>
                        <tr>
                            <td>{result.id}</td>
                            <td>{result.date}</td>
                            <td>{result.description}</td>
                            <td>{result.category}</td>
                            <td>{result.amount}</td>
                        </tr>
                    </tbody>
                </>
                    )
                }
            }
                

    const handleInput = (e) => {setSearchTerm(e.target.value)}
    // console.log(searchResults)

    return (
        <>
            <h2 id='search-h2'>Search For Transaction</h2>
            <form id='form-search' onSubmit={handleSearch}>
                <input type="text" placeholder="Search..." onChange={handleInput} />
                {/* <p>{"Type then press 'Enter' to Search"}</p> */}
                <button type='submit'>Search</button>
            </form>
            {/* <ul> {searchResults.map((result, index) => ( <li key={index}>{result}</li> ))} </ul> */}
            {/* <ul style={{listStyleType:'none'}}><li>{searchResults}</li></ul> */}
            {/* <CreateTable result={searchResults} /> */}

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
            {createTable(searchResults)}
            </table>

        </>
    )
}

export default Search;