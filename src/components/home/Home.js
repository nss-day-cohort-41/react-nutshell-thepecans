import React from 'react'
import FriendList from "../friends/FriendList"
import TaskList from "../tasks/TaskList"
import ArticleList from "../articles/ArticleList"
import EventList from "../events/EventList"
import MessageList from '../messages/MessageList'
import "./Home.css"


const Home = (props) => {

    return (
        <>
            <div className="home__body">
                <div className="home__list__container">
                    <div className="home__list__top">
                        <div className="home__list__item__top">
                            <div className="hli__header">
                                <h3>Friends</h3>
                            </div>
                            <FriendList {...props} />
                        </div>
                        <div className="home__list__item__top">
                            <div className="hli__header">
                                <h3>Articles</h3>
                            </div>
                            <ArticleList {...props} />
                        </div>
                    </div>


                    <div className="home__list__bottom">
                        <div className="home__list__item__bottom">
                            <div className="hli__header">
                                <h3>Tasks</h3>
                            </div>
                            <TaskList {...props} />
                        </div>

                        <div className="home__list__item__bottom">
                            <div className="hli__header">
                                <h3>Events</h3>
                            </div>
                            <EventList {...props} />
                        </div>
                        <div className="home__list__item__bottom">
                            <div className="hli__header">
                                <h3>Messages</h3>
                            </div>
                            <MessageList {...props} />
                        </div>
                        
                    </div>



                </div>
            </div>





        </>
    )

}

export default Home