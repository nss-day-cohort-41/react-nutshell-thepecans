import React from 'react'

const FriendCard = props => {


    return (
        <>
            <div className='card'>
                <h3>{props.friend.user.username}</h3>
                <button 
                    type="button"
                    onClick={() => props.removeFriend(props.friend.id)}
                >
                    Unfriend
                </button>
                <button type="button">Details</button> 
            </div>
            
        </>
    )
}

export default FriendCard