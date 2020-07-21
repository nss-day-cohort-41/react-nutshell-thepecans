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
                <h1>Welcome to nutshell!</h1>
                <div className="home__list__container">
                    <div className="home__list__top">
                        <div className="home__list__item__top">
                            <FriendList {...props} />
                        </div>
                        <div className="home__list__item__top">
                            <ArticleList {...props} />
                        </div>
                    </div>


                    <div className="home__list__bottom">
                        <div className="home__list__item">
                            <TaskList {...props} />
                        </div>

                        <div className="home__list__item">
                            <EventList {...props} />
                        </div>
                        <div className="home__list__item">
                            <p>messages will go here...</p>
                        </div>
                    </div>



                </div>
            </div>





        </>
    )

}

export default Home