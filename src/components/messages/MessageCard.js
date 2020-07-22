import React from 'react'


const MessageCard = props => {

    return(
        <section className="message--card">
            
            <div>
                <strong>
                    {props.message.user.username}
                </strong>
            </div>
            <p>
                {props.convertTime(props.message.timeStamp)}
            </p>
            <p>
                {props.message.content}
            </p>
            {parseInt(sessionStorage.credentials) === props.message.userId  
            ? <button onClick={() => {props.deleteMessage(props.message.id)}}>Delete</button>
            :"" }
            {console.log(props.message)}
        </section>
    )
}

export default MessageCard