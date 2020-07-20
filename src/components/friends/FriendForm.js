import React from 'react'
import "./Friends.css"

const FriendForm = props => {


    return (
        <fieldset>
            <label htmlfor="friendName">Looking for a friend?</label>
            <input
                type="text"
                id="friendName"
                placeholder="ex. Jane Doe"
            />
            
        </fieldset>
    )
}


export default FriendForm