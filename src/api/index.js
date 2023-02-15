import axios from "axios";

const url = 'http://localhost:5000/post'

export const fetchAll = async() => axios.get(url)

export const fetchOne = async(id) => axios.get(`${url}/${id}`)

export const create = async(newPost) => axios.post(url, newPost)

export const update = async(id, updatedPost) => axios.put(`${url}/${id}`, updatedPost)

export const remove = async(id) => axios.delete(`${url}/${id}`)

export const like = async(id) => axios.patch(`${url}/${id}/like`)
