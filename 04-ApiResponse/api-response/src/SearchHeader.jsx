import { useState } from "react";

function SearchHeader({search}) {

    const [keyword, setKeyword] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(keyword)
    }

    const handleTextChange = (event) => {
        setKeyword(event.target.value);
    }

    return (<>
    <div className="search-div">
        <form onSubmit={handleFormSubmit}>
            <label>Ne arıyorsunuz?</label>
            <input type="text" value={keyword} onChange={handleTextChange}/>
        </form>
    </div>
    </>);
}

export default SearchHeader;