import React from 'react';

const SearchBox=(props)=>{
    return(
        <div className='pa2'>
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={props.searchChange}//from here it call to app.js for searchange function
            />
        </div>
    );
}
export default SearchBox;