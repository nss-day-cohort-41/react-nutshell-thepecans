import React, {useState, useEffect} from 'react'
import ApiManager from '../../modules/ApiManager'
import MessageCard from './MessageCard'
import MessageForm from './MessageForm'
import "./Messages.css"


const MessageList = props => {

const [messages, setMessages] = useState([])
const [friends, setFriends] = useState([])

//message functions
const getSortSetMessages = () => {
    return ApiManager.getAll('messages', 'user')
            .then(result => sortMessages(result))
            .then(result => setMessages(result))
}

const sortMessages = (array) => {
    return array.sort((message1, message2) => message1.timeStamp-message2.timeStamp)
}

//friend functions

const getFriends = () => {
    return ApiManager.getFriends(sessionStorage.credentials)
            .then(result => setFriends(result))
}

const getFriendIds = (array) => {
    const friendIds = []
    array.map((friend) => {
        
    })
}

const convertTime = (unixTime) => {
    const date = new Date(unixTime * 1000)
    const newTime = date.toString()
    const newNewTime = newTime.slice(0,25)
    return newNewTime
}




useEffect(() => {
    getSortSetMessages()
    getFriends()
},[] )

return (
    <div class="message--list">
        <h1>Messages</h1>
        
        <>
            {messages.map(message => 
                    <MessageCard 
                        key={message.id}
                        className="message__card"
                        message={message}
                        friends={friends}
                        convertTime={convertTime}
                        {...props}
                    />
            )}
        </>
        <div className="message__container--form">
            <MessageForm 
                getSortSetMessages={getSortSetMessages}
                {...props} 
            />
        </div>
    </div>
)








}

export default MessageList