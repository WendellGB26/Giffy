import React,{ useState } from 'react';

function SearchForm ({ handleSubmit : handleSubmitFromParent}) {
    const [keyword,setKeyword] = useState ('')


    const handleSubmit = evt =>{
        evt.preventDefault()
        handleSubmitFromParent({ keyword })
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Search the gif...' onChange={handleChange} type='text' value={keyword}></input>
            <button onClick={handleChange} value={keyword}>Search</button>
        </form>
    )
}

export default React.memo(SearchForm)