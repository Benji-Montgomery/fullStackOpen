import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    console.log('getting')
    return request.then(response => {
        console.log(response)
        console.log(response.data)
        return response.data})
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
const userDelete = (name) => {
    const request = axios.delete(`http://localhost:3001/persons/${name}`)
    return request.then(response => {
        console.log(response)
        console.log(response.data)
        return response.data
    } )
}
export default {
    getAll : getAll,
    create: create,
    update: update,
    userDelete: userDelete
}