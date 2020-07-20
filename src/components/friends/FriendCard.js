import React from 'react'

const FriendCard = props => {


    return (
        <>
            <div className='card'>
                <h3>{props.friend.user.username}</h3>
                <h4>Id of friend {props.friend.user.id}</h4>
                <h4>Id of relationship {props.friend.id}</h4>
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