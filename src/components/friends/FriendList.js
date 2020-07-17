import React, {useState, useEffect} from 'react'
import FriendCard from './FriendCard'
import ApiManager from '../../modules/ApiManager'
import "./Friends.css"


const FriendList = props => {

    const [friends, setFriends] = useState([])



    useEffect(() => {

        ApiManager.getFriends(sessionStorage.credentials)
            .then(results => setFriends(results))
    }, [] )





    return (
        <div className='card__container'>
            {friends.map(friend => 
                <FriendCard 
                    key={friend.user.id}
                    user={friend.user} 
                    {...props} 
                    
                />
            )}
            
        </div>
    )

}

export default FriendList