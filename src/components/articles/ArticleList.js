// ArticleList component by David Larsen

import React, { useState, useEffect} from "react"
import ApiManager from "../../modules/ApiManager"
import ArticleCard from "./ArticleCard"

const ArticleList = (props) => {

    const [firstArticle, setFirstArticle] = useState([])
    const [remainingArticles, setRemainingArticles] = useState([])

    // Get current user Id for reference
    const currentUserId = parseInt(sessionStorage.getItem("credentials"))


    const sortArticles = (articlesArray, friendsArray) => {
        // Elminate Articles that do not belong to the current user or his/her friends
        const relevantArticles = articlesArray.filter(article => {
            if (article.userId === currentUserId) {return true}
            return friendsArray.some(friend => friend.userId === article.userId)
        })
        // Eliminate all Articles before current date, agnostic of time
        const currentArticles = relevantArticles.filter(article => new Date(article.date) >= new Date().setHours(0, 0, 0, 0))
        // Sort current and upcoming list in descending order
        const sortedArticles = currentArticles.sort((article1, article2) => new Date(article1.date) - new Date(article2.date))
        // Find first article belonging to the current user
        const firstUserArticle = currentArticles.find(article => article.userId === currentUserId)
        setFirstArticle(firstUserArticle)
        // Then, remove the first user's article from the array to display the remaining Articles
        sortedArticles.splice(sortedArticles.indexOf(firstUserArticle), 1)
        setRemainingArticles(sortedArticles)
    }

    useEffect(() => {
        ApiManager.getFriends(parseInt(sessionStorage.getItem("credentials")))
        .then(friendsFromAPI => {
            ApiManager.getAll("Articles")
            .then(ArticlesFromAPI => {
                sortArticles(ArticlesFromAPI, friendsFromAPI)
            })
        })
    }, [])

    // Delete button calls this function to delete Article, then pull the updated list of Articles and update state
    const deleteArticle = id => {
        ApiManager.deleteObject("Articles", id)
        .then(() => ApiManager.getFriends(parseInt(sessionStorage.getItem("credentials"))))
        .then(friendsFromAPI => {
            ApiManager.getAll("Articles")
            .then(ArticlesFromAPI => {
                sortArticles(ArticlesFromAPI, friendsFromAPI)
            })
        })
    }

    return (
        <>
            <section className="section-content">
                <button type="button" className="section--button" 
                    onClick={() => {props.history.push("/Articles/new")}}>&#65291; Add Article
                </button>
            <div className="Article--list">
            {/* Error prArticleion in case of no firstArticle */}
            { firstArticle && <ArticleCard key={firstArticle.id} Article={firstArticle} deleteArticle={deleteArticle} firstArticle={true} currentUserId={currentUserId} {...props} /> }
                {remainingArticles.map(Article => <ArticleCard key={Article.id} Article={Article} deleteArticle={deleteArticle} firstArticle={false} currentUserId={currentUserId} {...props} />)}
            </div>
            </section>
        </>
    )
}

export default ArticleList