import React, {useState} from 'react'
import ApiManager from '../../modules/ApiManager'


const MessageForm = props => {

const [message, setMessage] = useState({content:""})
const [isLoading, setIsLoading] = useState(false)

const handleFieldChange = event => {
    const stateToChange = {...message}
    stateToChange[event.target.id] = event.target.value
    setMessage(stateToChange)
}

const constructNewMessage = event => {
    event.preventDefault()
    if (event.content === "") {
        window.alert("Please input message before submitting.")
    } else {
        setIsLoading(true)
        const newMessage = {
            userId: parseInt(sessionStorage.credentials),
            content: message.content,
            timeStamp: new Date().getTime()/1000
        }
        ApiManager.addObject('messages', newMessage)
            .then(() => props.history.push("/messages"))
            .then(() => props.getSortSetMessages())
    }
}


return(
    <>
        <textarea id="content" row="30" cols="80" placeholder="Send everyone a message!" onChange={handleFieldChange}></textarea>
        <button 
            type="button" 
            htmlFor="content"
            disabled={isLoading}
            onClick={constructNewMessage}
        >
            Send
        </button>
    </>
)

}


export default MessageForm