import React, {useState, useEffect} from 'react'
import FriendCard from './FriendCard'
import FriendForm from './FriendForm'
import ApiManager from '../../modules/ApiManager'
import "./Friends.css"


const FriendList = props => {

    const [friends, setFriends] = useState([]) 



    useEffect(() => {
        ApiManager.getFriends(sessionStorage.credentials)
        .then(results => setFriends(results))
    },[] )

// creates relationship object in friend
    const addFriend = (id) => {
        const newFriend = {
            activeUserId: parseInt(sessionStorage.credentials),
            userId: parseInt(id)
        }
        
        ApiManager.addObject('friends', newFriend)
            .then(ApiManager.getFriends(sessionStorage.credentials)
                    .then(results => setFriends(results)))

    }



// activates onClick of remove button on FriendCard
    const removeFriend = id => {
        ApiManager.deleteObject('friends', id)
            .then(ApiManager.getFriends(sessionStorage.credentials)
                            .then(results => setFriends(results))
                )

    }
   

    return (
        <>

            <FriendForm 
                addFriend={addFriend}
                {...props} 
            />
            <div className='card__container'>            
                {friends.map(friend => 
                    <FriendCard 
                        key={friend.id}
                        friend={friend} 
                        removeFriend={removeFriend}
                        {...props} 
                        
                    />
                )}
                
            </div>
        </>
    )

}

export default FriendList