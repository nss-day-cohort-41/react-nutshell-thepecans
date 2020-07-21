import React from 'react'
import FriendList from "../friends/FriendList"
import TaskList from "../tasks/TaskList"
import ArticleList from "../articles/ArticleList"
import EventList from "../events/EventList"
import "./Home.css"


const Home = (props) => {

    return (
        <>
            <div className="home__body">
                <div className="home__list__container">
                    <div className="home__list__top">
                        <div className="home__list__item__top">
                            <h3 className="hli__header">Friends</h3>
                            <FriendList {...props} />
                        </div>
                        <div className="home__list__item__top">
                            <h3 className="hli__header">Articles</h3>
                            <ArticleList {...props} />
                        </div>
                    </div>


                    <div className="home__list__bottom">
                        <div className="home__list__item__bottom">
                            <h3 className="hli__header">Tasks</h3>
                            <TaskList {...props} />
                        </div>

                        <div className="home__list__item__bottom">
                            <h3 className="hli__header">Events</h3>
                            <EventList {...props} />
                        </div>
                        <div className="home__list__item__bottom">
                            <h3 className="hli__header">Messages</h3>
                            <p>messages will go here...</p>
                        </div>
                    </div>



                </div>
            </div>





        </>
    )

}

export default Home