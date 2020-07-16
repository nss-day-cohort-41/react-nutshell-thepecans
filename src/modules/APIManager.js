const remoteURL = "http://localhost:8088"

export default {
    
    getAll(source) {
        return fetch(`${remoteURL}/${source}`).then(result => result.json())
    }
    
}
