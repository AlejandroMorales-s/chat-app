import React from 'react';
import {BiSearch} from 'react-icons/bi';

export default function SearchInput() {
    return (
        <>
            <div className='search-input-container'>
                <input className='search-input' type='text' placeholder='Search'/>
                <BiSearch className='search-icon'/>
            </div>
        </>
    )
}
