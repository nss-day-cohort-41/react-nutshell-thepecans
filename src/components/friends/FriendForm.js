import React, { useState} from 'react'
import "./Friends.css"
import ApiManager from '../../modules/ApiManager'

const FriendForm = (props) => {

    const [searchItems, setSearchItems] = useState([])

    const searchFriend = (input) => {
        console.log(input.target.value)
        if(input.target.value !== ""){
            ApiManager.searchUsers(input.target.value)
                .then((results) => {
                    const arr = []
                    results.map((user) => {
                        if(user.id !== parseInt(sessionStorage.credentials)) {
                            arr.push(user)
                        }
                    })
                    return arr
                }).then(results => setSearchItems(results))
        }

    }

 
    return (
        <div  className="friendSearch">
            <fieldset>
                <label htmlFor="friendName">Looking for a friend?</label>
                <input
                    type="text"
                    id="friendName"
                    placeholder="ex. Bjork"
                    onChange={searchFriend}
                />                
            </fieldset>
            {searchItems.map(item => 
                
                
                <div key={item.id} className="searchList">   
                    <p>
                        {item.username}
                    </p>
                    <button
                        type="button"
                        id="addUser"
                        className="friendSearch--button"
                        onClick={() => props.addFriend(item.id)}
                    >
                        + add
                    </button>
                </div>
            )}

        </div>
    )
}


export default FriendForm