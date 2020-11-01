import React from 'react';
// import SearchBox from './SearchBox';
import '../Styles/panel.css';
// import Favourite from './Favourite';
import DirectMessage from './DirectMessage';
// import Channels from './Channels';

export default function Panel({users}){
    return(
        <div className="panel">
            {/*<SearchBox />*/}
            {/*<Favourite />*/}
            <DirectMessage users={users}/>
            {/*<Channels />*/}
        </div>
    );
}