import React from "react";

const Search = ({searchTerm, setSearchTerm}: {searchTerm: string, setSearchTerm: any}) => {
    return ( 
        <div className="search">
            <div>
                <img src="./search.svg" alt="search-button" />

                <input 
                type="text" 
                placeholder="Search through thousands of movies.." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 />
            </div>
        </div>
     );
}
 
export default Search;