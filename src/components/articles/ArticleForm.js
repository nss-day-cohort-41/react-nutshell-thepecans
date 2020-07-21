// ArticleForm by David Larsen

import React, { useState } from "react"
import ApiManager from "../../modules/ApiManager"

const ArticleForm = props => {
    const [article, setArticle] = useState({ title: "", description: "", url: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...article }
        stateToChange[evt.target.id] = evt.target.value
        setArticle(stateToChange)
    }

    const constructNewArticle = evt => {
        evt.preventDefault()
        if (article.title === "" || article.description === "" || article.url === "") {
            window.alert("Please provide all information about the article")
        } else {
            setIsLoading(true)
            const newArticle = {
                title: article.title,
                description: article.description,
                url: article.url,
                timestamp: new Date(),
                userId: parseInt(sessionStorage.getItem("credentials"))
            }
            ApiManager.addObject("articles", newArticle)
            .then(() => props.history.push("/articles")) 
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
                            placeholder="Article Title"
                        />
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="description"
                            placeholder="Brief description about the article"
                            />
                        <label htmlFor="description">Description</label>
                        <input 
                            type="url"
                            required
                            onChange={handleFieldChange}
                            id="url"
                            placeholder="URL of original article"
                        />
                        <label htmlFor="url">URL</label>
                    </div>
                    <div className="button">
                        <button
                            type="button"
                            className="section--button"
                            disabled={isLoading}
                            onClick={constructNewArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default ArticleForm