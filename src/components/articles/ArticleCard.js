// ArticleCard by David Larsen
import React from "react"
import "./Article.css"

const ArticleCard = props => {

    // Parse date into proper display format
    const articleTimestamp = new Date(props.article.timestamp)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const minutes = articleTimestamp.getMinutes()
    const seconds = articleTimestamp.getSeconds()
    const articleMinutes = (minutes < 10) ? "0" + minutes : minutes
    const articleSeconds = (seconds < 10) ? "0" + seconds : seconds
    const articleTime = `${articleTimestamp.getHours()}:${articleMinutes}:${articleSeconds}`
    const parseTimestamp = `${daysOfWeek[articleTimestamp.getDay()]} ${monthNames[articleTimestamp.getMonth()]} ${articleTimestamp.getDate()} ${articleTimestamp.getFullYear()} ${articleTime}`
    
    return (
        // Add additional class name to the first Article in the list
        <div className={"article-card " + (props.article.userId !== props.currentUserId ? "article--friend" : "")}>
            <h3 className="article--title">{props.article.title}</h3>
            <p>{props.article.description}</p>
            <p><a className="article--link" href={`${props.article.url}`}>{props.article.url}</a></p>
            <p className="article--timestamp"><em>Shared on {parseTimestamp}</em></p>
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