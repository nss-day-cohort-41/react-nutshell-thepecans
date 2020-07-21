// ArticleList component by David Larsen

import React, { useState, useEffect} from "react"
import ApiManager from "../../modules/ApiManager"
import ArticleCard from "./ArticleCard"

const ArticleList = (props) => {

    const [articles, setArticles] = useState([])

    // Get current user Id for reference
    const currentUserId = parseInt(sessionStorage.getItem("credentials"))


    const sortArticles = (articlesArray, friendsArray) => {
        // Elminate articles that do not belong to the current user or his/her friends
        const relevantArticles = articlesArray.filter(article => {
            if (article.userId === currentUserId) {return true}
            return friendsArray.some(friend => friend.userId === article.userId)
        })
        // Sort article list in descending order
        const sortedArticles = relevantArticles.sort((article1, article2) => new Date(article2.date) - new Date(article1.date))
        setArticles(sortedArticles)
    }

    useEffect(() => {
        ApiManager.getFriends(parseInt(sessionStorage.getItem("credentials")))
        .then(friendsFromAPI => {
            ApiManager.getAll("articles")
            .then(articlesFromAPI => {
                sortArticles(articlesFromAPI, friendsFromAPI)
            })
        })
    }, [])

    // Delete button calls this function to delete article, then pull the updated list of articles and update state
    const deleteArticle = id => {
        ApiManager.deleteObject("articles", id)
        .then(() => ApiManager.getFriends(parseInt(sessionStorage.getItem("credentials"))))
        .then(friendsFromAPI => {
            ApiManager.getAll("articles")
            .then(articlesFromAPI => {
                sortArticles(articlesFromAPI, friendsFromAPI)
            })
        })
    }

    return (
        <>
            <section className="section-content">
                <button type="button" className="articleSection--button" 
                    onClick={() => {props.history.push("/articles/new")}}>&#65291; Add Article
                </button>
            <div className="article--list">
                {articles.map(article => <ArticleCard key={article.id} article={article} deleteArticle={deleteArticle} currentUserId={currentUserId} {...props} />)}
            </div>
            </section>
        </>
    )
}

export default ArticleList