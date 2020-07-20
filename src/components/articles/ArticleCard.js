// ArticleCard by David Larsen
import React from "react"
import "./Article.css"
// import { Link } from "react-router-dom"

const ArticleCard = props => {

    // Parse date into proper display format
    const articleDate = new Date(props.article.date)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const articleDay = daysOfWeek[articleDate.getDay()]
    const parseDate = `${monthNames[articleDate.getMonth()]} ${articleDate.getDate()}`
    
    return (
        // Add additional class name to the first Article in the list
        <div className={"item-card " + (props.article.userId !== props.currentUserId ? "Article--friend" : "")}>
            <h3>{props.article.title}</h3>
            <p>{props.article.description}</p>
            <p>{parseDate}</p>
            {props.article.userId === props.currentUserId
            ? <div className="article--buttons">
            <button type="button" className="card--button" onClick={() => props.history.push(`/articles/${props.article.id}/edit`)}>Edit</button>
            {props.deleteArticle
                && <button type="button" className="card--button" onClick={() => props.deleteArticle(props.article.id)}>Delete</button>
            }
            </div>
            : "" }
        </div>
    )
}

export default ArticleCard