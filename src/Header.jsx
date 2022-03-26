import React from 'react';

function Header(props) {
    return(
        <div className='appheader'>
           <h2>React Counter</h2>
           <button className="inc-dec-button" onClick = {props.increaseCounter}>+</button>
            <button className="inc-dec-button" onClick = {props.decreaseCounter}>-</button>
        </div>
    )
}

export default Header;