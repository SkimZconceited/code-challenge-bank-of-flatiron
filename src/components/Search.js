import React, {useState, useEffect} from 'react'

function Search({initialData}) {
    function handleSearch(event) {
        event.preventDefault();
        // return setSearchTerm(event.target.value)
    }

    // console.log(initialData)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(initialData);
    // console.log(searchTerm)

    useEffect(() => {
        // const results = initialData.map((dat) => { });
        // console.log(searchTerm.toLowerCase())
        initialData.map((dat) => {if(searchTerm === dat.description) { 
            return setSearchResults([dat.id, dat.date, dat.description, dat.category, dat.amount])
        }

    })
    }, [searchTerm]);

    // console.log(searchResults)

    return (
        <>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search..." onKeyDown={(e) => e.key === 'Enter' ? setSearchTerm(e.target.value) : ''} />
                <p>{"Type then press 'Enter' to Search"}</p>
            </form>
            {/* <ul> {searchResults.map((result, index) => ( <li key={index}>{result}</li> ))} </ul> */}
            {/* <ul style={{listStyleType:'none'}}><li>{searchResults}</li></ul> */}
            {CreateTable({results: searchResults})}
        </>
    )
}

function CreateTable({results}){
    return (
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
                <tr>
                    <td>{results[0]}</td>
                    <td>{results[1]}</td>
                    <td>{results[2]}</td>
                    <td>{results[3]}</td>
                    <td>{results[4]}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Search;