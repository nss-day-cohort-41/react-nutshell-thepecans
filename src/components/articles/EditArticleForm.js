// EditArticleForm by David Larsen

import React, { useState, useEffect } from "react"
import ApiManager from "../../modules/ApiManager"

const ArticleForm = props => {
    const [article, setArticle] = useState({ title: "", description: "", url: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...article }
        stateToChange[evt.target.id] = evt.target.value
        setArticle(stateToChange)
    }

    useEffect(() => {
        ApiManager.getExpanded("articles", props.match.params.articleId)
        .then(article => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [props.match.params.articleId])

    const updateArticle = evt => {
        evt.preventDefault()
        if (article.title === "" || article.description === "" || article.url === "") {
            window.alert("Please provide all information about the Article")
        } else {
            setIsLoading(true)
            const editedArticle = {
                id: props.match.params.articleId,
                title: article.title,
                description: article.description,
                url: article.url,
                timestamp: new Date(),
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            ApiManager.editObject("Articles", editedArticle)
            .then(() => props.history.push("/Articles"))
        }
    }

    return (
        <>
            <form>
                <fieldset>
                    <div className="entryForm">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="title"
                            value={article.title}
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="description"
                            value={article.description}
                            />
                        <label htmlFor="description">Description</label>
                        <input 
                            type="url"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            value={article.url}
                        />
                        <label htmlFor="url">URL</label>
                    </div>
                    <div className="button">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default ArticleForm