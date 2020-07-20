const remoteURL = "http://localhost:5002"
//json-server -p 5002 -w database.json

export default {
    //"embed" is an optional parameters. the function will work without it.  If "id is omitted, call the cunction with an empty string in the id parameter"
    getEmbedded(table, id, embed) {
        return fetch(`${remoteURL}/${table}/${id}?_embed=${embed}`)
            .then(result => result.json())
    },
    //"expand" is an optional parameters. the function will work without it.
    getExpanded(table, id, expand) {
        return fetch(`${remoteURL}/${table}/${id}?_expand=${expand}`).then(result => result.json())
    },
    //A simpler call with no id parameter for when you're in a hurry or just don't want to make things too complicated.  "expand" can be left out
    getAll(table, expand) {
        return fetch(`${remoteURL}/${table}/?_expand=${expand}`).then(result => result.json())
    },
    getFriendData(id, embed) {
        return fetch (`${remoteURL}/users?id=${id}&_embed=friends&_embed=${embed}`).then(result => result.json())
    },
    getByUserId(table, id, expand) {
        return fetch(`${remoteURL}/${table}/?userId=${id}&_expand=${expand}`).then(result => result.json())
    },
    addObject(table, newObject) {
        return fetch(`${remoteURL}/${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(data => data.json())
    },
    deleteObject(table, id) {
        return fetch(`${remoteURL}/${table}/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    editObject(table, editedObject) {
        return fetch(`${remoteURL}/${table}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());
    },
    getRandomId(table) {
        return fetch(`${remoteURL}/${table}`)
            .then(result => result.json())
            .then(objects => {
                const randomIndex = Math.floor(Math.random() * objects.length);
                const randomObject = objects[randomIndex];
                return randomObject.id;
            });
    },

}
