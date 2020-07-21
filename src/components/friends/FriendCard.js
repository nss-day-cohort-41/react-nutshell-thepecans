import React from 'react'

const FriendCard = props => {


    return (
        <>
            <div className='friend--card'>
                <h3>{props.friend.user.username}</h3>
                <button 
                    type="button"
                    className="card--button"
                    onClick={() => props.removeFriend(props.friend.id)}
                >
                    Unfriend
                </button>
            </div>
            
        </>
    )
}

export default FriendCard