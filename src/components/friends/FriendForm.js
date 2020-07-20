import React from 'react'
import "./Friends.css"

const FriendForm = props => {

    const SearchFriend = (input) => {
        console.log('test', input)
    }


    return (
        <fieldset className="friendSearch">
            <label htmlFor="friendName">Looking for a friend?</label>
            <input
                type="text"
                id="friendName"
                placeholder="ex. Jane Doe"
                onChange={SearchFriend}
            />
            
        </fieldset>
    )
}


export default FriendForm