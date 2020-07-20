import React from 'react'
import ApiManager from '../../modules/ApiManager'

const FriendCard = props => {


    return (
        <>
            <div className='card'>
                <h3>{props.user.username}</h3>
                <h4>{props.user.id}</h4>
                <button 
                    type="button"
                    onClick={() => props.removeFriend(props.user.id)}
                >
                    Unfriend
                </button>
                <button type="button">Articles</button> 
                <button type="button">Events</button> 
            </div>
            
        </>
    )
}

export default FriendCard