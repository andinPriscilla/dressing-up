import React from 'react'

const Dresses = (props) => {
    return (
        <ul className="dresses" onClick={props.chooseDress}>
            <li><img src="images/white_dress.png"></img> </li>
            <li><img src="images/green_dress.png"></img></li>
            <li><img src="images/blue_dress.png"></img></li>
            <li><img src="images/purple_dress.png"></img></li>
            <li><img src="images/red_dress.png"></img></li>


        </ul>
    )
}

export default Dresses
