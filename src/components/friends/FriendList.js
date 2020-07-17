import React, {useState, useEffect} from 'react'
import FriendCard from './FriendCard.js'
import API from '../../modules/ApiManager.js'


const FriendList = props => {

const [friends, setFriends] = useState({ userName: ""})



useEffect(() => {

    API.getFriends(sessionStorage.activeUser)
        .then(results => setFriends(results))
})





return (
    <>
        <FriendCard friends={friends} {...props} />
    </>
)

}

export default FriendList