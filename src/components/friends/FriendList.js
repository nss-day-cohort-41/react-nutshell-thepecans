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
    }, [] )





    return (
        <>

            <FriendForm {...props} />
            <div className='card__container'>            
                {friends.map(friend => 
                    <FriendCard 
                        key={friend.user.id}
                        user={friend.user} 
                        {...props} 
                        
                    />
                )}
                
            </div>
        </>
    )

}

export default FriendList