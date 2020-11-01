import React from 'react';
import {CgProfile} from 'react-icons/cg';
import {GoPrimitiveDot} from 'react-icons/go';

export default function DirectMessage({users}){
    return(
        <div className="directMessage">
            <div className="directMessage__header">
                <h2>Active User(s)</h2>
            </div>
            <div className="directMessage__container">
                {
                    users 
                    ?(
                    users.map(({name,id}) =>{
                        return(
                        <div key={id} className="directMessage__profile">
                            <CgProfile size={20} />
                            <p>{name}</p>
                            <GoPrimitiveDot size={20} fill="green" />
                        </div>
                        )
                    }))
                    : null
                }
                
            </div>
        </div>
    )
}