const remoteURL = "http://localhost:8088"

export default {
    
    getAll(source) {
        return fetch(`${remoteURL}/${source}`).then(result => result.json())
    },
    getById(source, userId) {
        return fetch(`${remoteURL}/${source}?userId=${userId}`).then(result => result.json())
    },
    postNewItem(source, newItem) {
        return fetch(`${remoteURL}/${source}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
    }
    
}
