import React from 'react'

const FriendCard = props => {

    return (
        <>
            <div className='card'>
                <h3>{props.user.username}</h3>
                <button type="button">Articles</button> 
                <button type="button">Events</button> 
            </div>
            
        </>
    )
}

export default FriendCard