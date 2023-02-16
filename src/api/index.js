import axios from "axios";

const postUrl = `${process.env.REACT_APP_BACKEND}/post`
// const postUrl = `http://localhost:5000/post`


export const fetchAll = async() => axios.get(postUrl)

export const fetchOne = async(id) => axios.get(`${postUrl}/${id}`)

export const create = async(newPost) => axios.post(postUrl, newPost)

export const update = async(id, updatedPost) => axios.put(`${postUrl}/${id}`, updatedPost)

export const remove = async(id) => axios.delete(`${postUrl}/${id}`)

export const like = async(id) => axios.patch(`${postUrl}/${id}/like`)
