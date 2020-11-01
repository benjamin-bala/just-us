import React from 'react';
import '../Styles/searchbox.css';
import {FiSearch} from 'react-icons/fi';

export default function SearchBox(){
    return(
        <div className="searchbox">
            <FiSearch size={20} />
            <input type="text" placeholder="Search"/>
        </div>
    )
}