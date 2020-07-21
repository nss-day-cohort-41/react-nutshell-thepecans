import React, {useState, useEffect} from 'react'
import ApiManager from '../../modules/ApiManager'
import MessageCard from './MessageCard'


const MessageList = props => {

const [messages, setMessages] = useState([])
const [friends, setFriends] = useState([])

//message functions
const getSortSetMessages = () => {
    return ApiManager.getAll('messages')
            .then(result => sortMessages(result))
            .then(result => setMessages(result))
}

const sortMessages = (array) => {
    return array.sort((a,b) => b-a)
}

//friend functions

const getFriends = () => {
    return ApiManager.getFriends(sessionStorage.credentials)
            .then(result => setFriends(result))
}

const getFriendIds = (array) => {
    const friendIds = []
    array.map((friend) => {
        console.log(friend.user.userId)
    })
}

useEffect(() => {
    getSortSetMessages()
    getFriends()
},[] )

return (
    <div>
        <h1>Messages</h1>
        
        <div>
            {messages.map((message) => {
                
                }

            )}
        </div>
        {console.log(messages)}
        {console.log(friends)}
    </div>
)








}

export default MessageList